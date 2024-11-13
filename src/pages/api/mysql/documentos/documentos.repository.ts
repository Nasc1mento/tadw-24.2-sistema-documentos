import { Connection, ResultSetHeader } from "mysql2";
import { IDocumento, TipoDocumento } from "./documento";
import { IDocumentoRepository } from "./documentos.interface.repository";
import MySqlConnection from "../conexao";

export default class DocumentosRepository implements IDocumentoRepository {

    private connection: Connection = MySqlConnection.getConnection();


    save(documento: IDocumento): Promise<IDocumento> {
        return new Promise((resolve, reject) => {
            this.connection.query<ResultSetHeader>(
                'insert into documentos (titulo, conteudo, tipo) values (?, ?, ?)',
                [
                    documento.titulo, 
                    documento.conteudo,
                    documento.tipo
                ],
                (error, results) => {
                    if (error) 
                        reject(error);
                    else {
                        if (TipoDocumento.ACADEMICO in documento && documento.academico) {
                            this.connection.query<ResultSetHeader>(
                                'insert into documentos_academicos (autor, area_estudo, doi, documento_id) values (?, ?, ?, ?)',
                                [
                                    documento.academico.autor, 
                                    documento.academico.areaEstudo,
                                    documento.academico.doi,
                                    results.insertId
                                ],
                                (error, results) => {
                                    if (error) 
                                        reject(error);
                                    else 
                                        resolve(documento);
                                }
                            )

                        } else {
                            this.connection.query<ResultSetHeader>(
                                'insert into documentos_financeiros (data, valor, departamento, documento_id) values (?, ?, ?, ?)',
                                [
                                    documento.financeiro.data, 
                                    documento.financeiro.valor,
                                    documento.financeiro.departamento,
                                    results.insertId
                                ],
                                (error, results) => {
                                    if (error) 
                                        reject(error);
                                    else 
                                        resolve(documento);
                                }
                            )
                        }
                    }
                }
            )
        });
    }

    getAll(): Promise<IDocumento[]> {
        return new Promise((resolve, reject) => {
            this.connection.query<IDocumento[]>(
                'select * from documentos',
                (error, results) => {
                    if (error) 
                        reject(error);
                    else {
                        resolve(results);
                        console.log(results);
                    }    
                }
            )
        });
    }
}