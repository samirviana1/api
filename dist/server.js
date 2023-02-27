"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pg_helper_1 = require("./database/pg-helper");
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json(), (0, cors_1.default)()); //routes);
pg_helper_1.pgHelper
    .connect()
    .then(() => app.listen(port, () => console.log(`Server is running in port ${port}`)))
    .catch((err) => console.log(err));
