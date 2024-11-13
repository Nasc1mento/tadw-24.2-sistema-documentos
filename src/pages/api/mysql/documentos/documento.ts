import { RowDataPacket } from "mysql2";

export enum TipoDocumento  {
    FINANCEIRO = 'financeiro',
    ACADEMICO = 'academico',
}

export interface IDocumento extends RowDataPacket{
    id: number;
    titulo: string;
    conteudo: string;
    tipo: TipoDocumento;
}

export interface IDocumentoAcademico extends IDocumento {
    id: number;
    autor: string;
    areaEstudo: string;
    doi: string;
    documentoId: number
}

export interface IDocumentoFinanceiro extends IDocumento {
    id: number;
    data: Date;
    valor: number;
    departamento: string;
    documentoId: number
}
