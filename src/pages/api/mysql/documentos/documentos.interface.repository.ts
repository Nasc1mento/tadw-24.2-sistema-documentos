import { IDocumento } from "./documento";

export interface IDocumentoRepository {
    save(documento: IDocumento): Promise<IDocumento>;
    getAll(): Promise<IDocumento[]>;
}