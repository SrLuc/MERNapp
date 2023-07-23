import express from "express";
import bodyParser from "body-parser";
import user from "./database/userdb.js";
import db from "./database/conection.js";

const app = express();

app.use(bodyParser.json());
app.use(express.json());

//get user
app.get("/user", (req, res) => {
  const sql = "SELECT * FROM dj";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//get user by id
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `SELECT * FROM dj WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//create user
app.post("/user", (req, res) => {
  const { nome, vertente } = req.body;
  const sql = `INSERT INTO dj (nome, vertente) VALUES ('${nome}', '${vertente}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//update user
app.put("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, vertente } = req.body;
  const sql = `UPDATE dj SET nome='${nome}', vertente='${vertente}' WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//delete user
app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `DELETE FROM dj WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

export default app;
