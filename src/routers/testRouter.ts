import express from "express";
import VideoUtils from "../handler/videoHandler";
import TestUtils from "../handler/test";
const testRouter = express.Router();

testRouter.get("/api/items?", async (req: any, res) => {
  const query: { [key: string]: string } = req.query as {
    [key: string]: string;
  };
  const result = await TestUtils.getList(query["q"]);
  res.json(result);
});

export default testRouter;
