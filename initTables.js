// initTables.js
const fs = require("fs");
const connection = require("./dbConnection");

const sqlFilePath = "init.sql";
const sqlFileContent = fs.readFileSync(sqlFilePath, "utf-8");

const initTables = () => {
  connection.query(sqlFileContent, (err) => {
    if (err) {
      console.error("Error executing SQL statements:", err);
    } else {
      console.log("Tables created or checked successfully");
    }
  });
};

module.exports = initTables;
