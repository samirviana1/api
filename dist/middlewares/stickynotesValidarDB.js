"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stickynoteValidoDB = void 0;
function stickynoteValidoDB(req, res, next) {
    const { title, description } = req.body;
    if (!title || !description) {
        res.status(400).json({
            sucesso: false,
            mensagem: "É preciso preencher todos os campos!",
        });
    }
    next();
}
exports.stickynoteValidoDB = stickynoteValidoDB;
