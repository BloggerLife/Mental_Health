const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "zainmika",
  database: "mysqll",
});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;

  db.query(
    "INSERT INTO mhc_users (id, name, surname, email) VALUES (id,?,?,?)",
    [name, surname, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server started on port 3001");
});
