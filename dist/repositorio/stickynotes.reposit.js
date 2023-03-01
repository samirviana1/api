"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickynotesRepositorio = void 0;
const stickyNotes_1 = require("../database/entities/stickyNotes");
const pg_helper_1 = require("../database/pg-helper");
class StickynotesRepositorio {
    async createStickynotes(title, description, uidUser) {
        const manager = pg_helper_1.pgHelper.client.manager;
        const newStickynotes = manager.create(stickyNotes_1.Stickynotes, {
            title,
            description,
            uidUser,
        });
        return await manager.save(newStickynotes);
    }
    async getAllUserSticky(uidUser) {
        const manager = pg_helper_1.pgHelper.client.manager;
        return await manager.find(stickyNotes_1.Stickynotes, { where: { uidUser } });
    }
    async updateUserSticky(uid_msg, title, description) {
        const manager = pg_helper_1.pgHelper.client.manager;
        const notes = await manager.findOne(stickyNotes_1.Stickynotes, { where: { uid_msg } });
        if (!notes) {
            return undefined;
        }
        notes.title = title;
        notes.description = description;
        return await manager.save(notes);
    }
    async deleteUserSticky(uid_msg) {
        const manager = pg_helper_1.pgHelper.client.manager;
        await manager.delete(stickyNotes_1.Stickynotes, {
            uid_msg,
        });
    }
}
exports.StickynotesRepositorio = StickynotesRepositorio;
