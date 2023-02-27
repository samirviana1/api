"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgHelper = void 0;
const typeorm_1 = require("typeorm");
const ormConfig_1 = __importDefault(require("./ormConfig"));
exports.pgHelper = {
    client: null,
    async connect() {
        this.client = new typeorm_1.DataSource(ormConfig_1.default);
        await this.client.initialize();
    },
    async disconnect() {
        await this.client.destroy();
        this.client = null;
    },
};
