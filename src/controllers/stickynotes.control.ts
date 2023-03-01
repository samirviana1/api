import {Request, Response} from "express";
import {StickynotesRepositorio} from "../repositorio/stickynotes.reposit";
export class StickyNotesControll {
  async create(req: Request, res: Response) {
    const {title, description, uidUser} = req.body;
    const repositorio = new StickynotesRepositorio();

    const stickyNotes = await repositorio.createStickynotes(
      title,
      description,
      uidUser
    );
    return res.status(200).json({
      sucesso: true,
      data: stickyNotes,
    });
  }

  async getUserStickyNotes(req: Request, res: Response) {
    const {uidUser} = req.params;
    const repositorio = new StickynotesRepositorio();
    const stickyNotes = await repositorio.getAllUserSticky(uidUser!);
    return res.status(200).json({
      sucesso: true,
      data: stickyNotes,
    });
  }

  async updateStickyNotes(req: Request, res: Response) {
    const {title, description, uid_msg} = req.body;
    const repositorio = new StickynotesRepositorio();
    const stickyNotes = await repositorio.updateUserSticky(
      uid_msg,
      title,
      description
    );
    res.status(200).json({
      sucesso: true,
      data: stickyNotes,
    });
  }

  async deleteStickyNotes(req: Request, res: Response) {
    const {uid_msg} = req.params;
    const repositorio = new StickynotesRepositorio();
    await repositorio.deleteUserSticky(uid_msg);
    res.status(200).json({
      suesso: true,
      mensagem: "StickyNotes exluida com sucesso!",
    });
  }
}
