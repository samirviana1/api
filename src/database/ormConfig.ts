import "dotenv/config";
import {DataSourceOptions} from "typeorm";
import {Stickynotes} from "./entities/stickyNotes";
import {Users} from "./entities/user";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: ["src/database/entities/**/*.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
};

export default config;
