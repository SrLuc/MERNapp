import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as Controller from "./controllers/djController.js";

//express & body-parser setup & cors
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//controller functions
app.get("/user", Controller.getUser);
app.get("/user/:id", Controller.getUserById);
app.post("/user", Controller.createUser);
app.put("/user/:id", Controller.updateUser);
app.delete("/user/:id", Controller.deleteUser);

export default app;
