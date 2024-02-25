import "reflect-metadata";
import { DataSource } from "typeorm";
import { VideoProfile } from "../entity/VideoProfile";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database:
    "D:\\Users\\mo\\Documents\\workspace\\python\\HellowWorld\\javlab.db",
  synchronize: true,
  logging: false,
  entities: [VideoProfile],
  migrations: [],
  subscribers: [],
});
