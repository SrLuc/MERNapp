import db from "../database/conection.js";
import * as Respository from "../repositories/djRepository.js";

//getUser controller function
export async function getUser(req, res) {
  const row = await Respository.findAll();
  res.json(row);
}

//getUserById controller function
export async function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const row = await Respository.findById(id);
  res.json(row);
}

//createUser controller function
export async function createUser(req, res) {
  const { nome, vertente } = req.body;
  const row = await Respository.create(nome, vertente);
  res.json(row);
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

//deleteUser controller function teste
export async function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  const sql = `DELETE FROM dj WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}
