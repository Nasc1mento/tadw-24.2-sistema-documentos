import mysql, { Connection } from "mysql2";
import { env } from "../env/env";


export default class MySqlConnection {

  private static connection: Connection;

  public static getConnection(): Connection {
    if (!this.connection) {
      this.connection = mysql.createConnection({
        host: env.DB_HOST,
        user: env.DB_USER,
        database: env.DB_DATABASE,
        port: env.DB_PORT,
        password: env.DB_PASSWORD
      });
    }
    return this.connection;
  }
  
  public static closeConnection(): void {
    if (this.connection) {
      this.connection.end();
    }
  }
}