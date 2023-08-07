import express from "express";
import bodyParser from "body-parser";
import db from "./database/conection.js";
import * as Controller from "./controllers/djController.js";

const app = express();
app.use(bodyParser.json());
app.use(express.json());

//controller functions
app.get("/user", Controller.getUser);
app.get("/user/:id", Controller.getUserById);
app.post("/user", Controller.createUser);

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
