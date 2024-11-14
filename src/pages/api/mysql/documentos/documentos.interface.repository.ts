import { IDocumento } from "./documento";

export default interface IDocumentoRepository {
    save(documento: IDocumento): Promise<IDocumento>;
    getAll(): Promise<IDocumento[]>;
}