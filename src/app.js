import express from "express";
import bodyParser from "body-parser";
import * as Controller from "./controllers/djController.js";

const app = express();
app.use(bodyParser.json());
app.use(express.json());

//root router
app.get("/", (req, res) => {
  res.send("Hello World");
});

//controller functions
app.get("/user", Controller.getUser);
app.get("/user/:id", Controller.getUserById);
app.post("/user", Controller.createUser);
app.put("/user/:id", Controller.updateUser);
app.delete("/user/:id", Controller.deleteUser);

export default app;
