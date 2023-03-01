"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: ["src/database/entities/**/*.ts"],
    migrations: ["src/database/migrations/**/*.ts"],
};
exports.default = config;
