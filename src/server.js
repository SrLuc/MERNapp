import app from "./app.js";
import db from "./database/conection.js";
import colors from "colors";

const port = 4040;

db.connect((err) => {
  if (err) {
    return console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`.bold);
    });

    console.log("Connected to database".bold);
  }
});
