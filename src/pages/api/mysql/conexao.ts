import mysql, { Connection } from "mysql2";
  

export default class MySqlConnection {

  private static connection: Connection;

  public static getConnection(): Connection {
    if (!this.connection) {
      this.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "tadw",
        port: 3306,
        password: "root",
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