import db from "../database/conection.js";

//index repository function and promisses
export async function findAll() {
  const sql = "SELECT * FROM dj";
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

//show repository function and promisses
export async function findById(id) {
  const sql = `SELECT * FROM dj WHERE id=${id}`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}
