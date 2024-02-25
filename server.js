// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// const initTables = require("./initTables");
const routes = require("./routes");

// Initialize tables
// initTables();

// Use routes
app.use("/", routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
