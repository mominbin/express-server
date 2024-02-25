import { EntityTarget } from "typeorm";
import { AppDataSource } from "../dataSource/data-source";
import { VideoProfile } from "../entity/VideoProfile";

interface VideoUtils<T> {
  [key: string]: () => Promise<T | undefined>;
}
function isColumnOfEntity(key: string, entity: EntityTarget<any>): boolean {
  return Object.keys(
    AppDataSource.getRepository(entity).metadata.propertiesMap
  ).includes(key);
}

async function getTotalPage(pageSize: number) {
  const repository = AppDataSource.getRepository(VideoProfile);
  const totalCount = await repository.count();

  // 计算总页数
  const totalPages = Math.ceil(totalCount / pageSize);

  return totalPages;
}

const VideoUtils = {
  getVideo: async (videoLink: string) => {
    const videoProfileRepository = AppDataSource.getRepository(VideoProfile);
    const one = await videoProfileRepository.findOneBy({
      video_link: `./?v=${videoLink}`,
    });
    return one;
  },
  getVideoByQuery: async (query: { [key: string]: string }) => {
    const alias = "videoProfile";
    let where: any = [];
    let value: any = [];
    let page = 0;
    let perPage = 10;
    let error = false;
    let errorMsg = "";
    Object.keys(query).forEach((key) => {
      console.log(key, query[key]);
      if (key === "page") {
        page = parseInt(query[key]);
      } else if (key === "perpage") {
        perPage = parseInt(query[key]);
      } else {
        if (!isColumnOfEntity(key, VideoProfile)) {
          errorMsg += `${key} is not a column of VideoProfile `;
          error = true;
          return;
        }
        where.push(`${alias}.${key} = :${key}`);
        value.push({ [key]: query[key] });
      }
    });
    if (error) {
      error && console.error(errorMsg);
      return null;
    }

    const queryBuilder =
      AppDataSource.getRepository(VideoProfile).createQueryBuilder(alias);
    where.forEach((w: any, i: any) => {
      queryBuilder.where(w, value[i]);
    });
    queryBuilder.orderBy(`${alias}.date`, "ASC");
    if (page !== 0) {
      queryBuilder.skip((page - 1) * perPage);
    }

    return queryBuilder.take(perPage).getManyAndCount();
  },
  getTotalPage: getTotalPage,
};
export default VideoUtils;
