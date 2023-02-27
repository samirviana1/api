import "dotenv/config";
import {DataSourceOptions} from "typeorm";
import {Users, Stickynotes} from "./entitys";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: ["src/database/entitys/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
};

export default config;
