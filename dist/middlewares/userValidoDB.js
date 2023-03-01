"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidoDB = void 0;
function userValidoDB(req, res, next) {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
        res.status(400).json({
            sucesso: false,
            mensagem: "É preciso preencher todos os campos!",
        });
    }
    next();
}
exports.userValidoDB = userValidoDB;
