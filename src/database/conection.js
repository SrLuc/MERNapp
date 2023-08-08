import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "psydjs",
});

export default db;
