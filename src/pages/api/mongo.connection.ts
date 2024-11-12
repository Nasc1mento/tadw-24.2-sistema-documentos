import { MongoClient } from "mongodb";
import { DatabaseConnection } from "./database.connection.interface";

export class MongoConnection implements DatabaseConnection {

    private url:string;
    private dbName:string;
    private client: MongoClient;

    constructor() {
        this.url = 'mongodb://localhost:27017';
        this.dbName = 'tadwdocuments';
        this.client = new MongoClient(this.url);
    }

    async connect() {
        try {
            await this.client.connect();
           
        } catch (error) {
            console.error(error);
        }
    }

    async getCollection(collectionName: string) {
        const db = this.client.db(this.dbName);
        return db.collection(collectionName);
    }
}