import app from "./app.js";
import db from "./database/conection.js";
import * as dotenv from "dotenv";
dotenv.config();

db.connect((err) => {
  if (err) {
    return console.log(err);
  } else {
    app.listen(process.env.API_ENDPOINT, () => {
      console.log(`Server is running on port http://localhost:${process.env.API_ENDPOINT}`.bold);
    });

    console.log("Connected to database".bold);
  }
});
