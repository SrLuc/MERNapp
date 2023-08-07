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

//updateUser controller function
export async function updateUser(req, res) {
  const id = parseInt(req.params.id);
  const { nome, vertente } = req.body;
  const sql = `UPDATE dj SET nome='${nome}', vertente='${vertente}' WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}

//deleteUser controller function
export async function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  const sql = `DELETE FROM dj WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}
