"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const ormConfig_1 = __importDefault(require("./ormConfig"));
exports.dataSource = new typeorm_1.DataSource(ormConfig_1.default);
