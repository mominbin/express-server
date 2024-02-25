// src/app.ts
import express from "express";
import sqliteRouter from "./routers/sqliteRouter";
import { AppDataSource } from "./dataSource/data-source";
import testRouter from "./routers/testRouter";
const cors = require("cors");

AppDataSource.initialize()
  .then(() => {
    const app = express();
    const port = 4000;
    app.use(cors());
    app.use(sqliteRouter);
    app.use(testRouter);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    AppDataSource.destroy();
  });
