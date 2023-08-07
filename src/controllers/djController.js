import db from "../database/conection.js";

//getUser controller function
export async function getUser(req, res) {
  const sql = `SELECT * FROM dj`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}

//getUserById controller function
export async function getUserById(req, res) {
    const id = parseInt(req.params.id);
    const sql = `SELECT * FROM dj WHERE id=${id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

//createUser controller function
export async function createUser(req, res) {
    const { nome, vertente } = req.body;
    const sql = `INSERT INTO dj (nome, vertente) VALUES ('${nome}', '${vertente}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}