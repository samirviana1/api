"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControl = void 0;
const user_repositorio_1 = require("../repositorio/user.repositorio");
class UserControl {
    async create(req, res) {
        const { name, email, password } = req.body;
        const repositorio = new user_repositorio_1.UserRepositorio();
        const user = await repositorio.createUser(name, email, password);
        return res.status(200).json({
            success: true,
            data: user,
        });
    }
    async loginUser(req, res) {
        const { email, password } = req.body;
        const repositorio = new user_repositorio_1.UserRepositorio();
        const user = await repositorio.userLogin(email, password);
        if (!user) {
            return res.status(400).json({ error: "senha ou e-mail não conferem! " });
        }
        else {
            return res.status(200).json({
                success: true,
                data: user,
            });
        }
    }
}
exports.UserControl = UserControl;
