import express from "express";
import VideoUtils from "../handler/videoHandler";
const sqliteRouter = express.Router();

sqliteRouter.get("/video-profile/:videoLink", async (req: any, res) => {
  const videoLink = req.params.videoLink;
  const result = await VideoUtils.getVideo(videoLink);
  res.json(result);
});

sqliteRouter.get("/video-profile?", async (req, res) => {
  const query: { [key: string]: string } = req.query as {
    [key: string]: string;
  };
  const video = await VideoUtils.getVideoByQuery(query);
  // let result = video
  //   ? video.map((item) => {
  //       return item.img_url;
  //     })
  //   : [];
  // res.json(result);
  res.json(video);
});

sqliteRouter.get("/video-profile/totalpage/:perpage", async (req, res) => {
  const perPage = req.params.perpage;
  const totalPage = await VideoUtils.getTotalPage(parseInt(perPage));
  res.send(totalPage);
});

export default sqliteRouter;
