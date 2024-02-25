// dbConnection.js
const mysql = require("mysql2");

const dbConfig = {
  host: "",
  user: "",
  password: "",
  database: "",
  port: 3306,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = connection;
