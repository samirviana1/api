"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExistDB = void 0;
const user_repositorio_1 = require("../repositorio/user.repositorio");
async function userExistDB(req, res, next) {
    const { uidUser } = req.body;
    const repositorio = new user_repositorio_1.UserRepositorio();
    const userExist = await repositorio.userExist(uidUser);
    if (!userExist) {
        return res.status(408).json({
            error: "Usuario não existe!",
        });
    }
    next();
}
exports.userExistDB = userExistDB;
