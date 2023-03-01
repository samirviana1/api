"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyNotesControll = void 0;
const stickynotes_reposit_1 = require("../repositorio/stickynotes.reposit");
class StickyNotesControll {
    async create(req, res) {
        const { title, description, uidUser } = req.body;
        const repositorio = new stickynotes_reposit_1.StickynotesRepositorio();
        const stickyNotes = await repositorio.createStickynotes(title, description, uidUser);
        return res.status(200).json({
            sucesso: true,
            data: stickyNotes,
        });
    }
    async getUserStickyNotes(req, res) {
        const { uidUser } = req.params;
        const repositorio = new stickynotes_reposit_1.StickynotesRepositorio();
        const stickyNotes = await repositorio.getAllUserSticky(uidUser);
        return res.status(200).json({
            sucesso: true,
            data: stickyNotes,
        });
    }
    async updateStickyNotes(req, res) {
        const { title, description, uid_msg } = req.body;
        const repositorio = new stickynotes_reposit_1.StickynotesRepositorio();
        const stickyNotes = await repositorio.updateUserSticky(uid_msg, title, description);
        res.status(200).json({
            sucesso: true,
            data: stickyNotes,
        });
    }
    async deleteStickyNotes(req, res) {
        const { uid_msg } = req.params;
        const repositorio = new stickynotes_reposit_1.StickynotesRepositorio();
        await repositorio.deleteUserSticky(uid_msg);
        res.status(200).json({
            suesso: true,
            mensagem: "StickyNotes exluida com sucesso!",
        });
    }
}
exports.StickyNotesControll = StickyNotesControll;
