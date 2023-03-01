import {Stickynotes} from "../database/entities/stickyNotes";
import {pgHelper} from "../database/pg-helper";

export class StickynotesRepositorio {
  async createStickynotes(
    title: string,
    description: string,
    uidUser: string
  ): Promise<Stickynotes> {
    const manager = pgHelper.client.manager;
    const newStickynotes = manager.create(Stickynotes, {
      title,
      description,
      uidUser,
    });
    return await manager.save(newStickynotes);
  }
  async getAllUserSticky(uidUser: string): Promise<Stickynotes[]> {
    const manager = pgHelper.client.manager;
    return await manager.find(Stickynotes, {where: {uidUser}});
  }
  async updateUserSticky(
    uid_msg: string,
    title: string,
    description: string
  ): Promise<Stickynotes | undefined> {
    const manager = pgHelper.client.manager;
    const notes = await manager.findOne(Stickynotes, {where: {uid_msg}});
    if (!notes) {
      return undefined;
    }

    notes.title = title;
    notes.description = description;
    return await manager.save(notes);
  }

  async deleteUserSticky(uid_msg: string): Promise<void> {
    const manager = pgHelper.client.manager;
    await manager.delete(Stickynotes, {
      uid_msg,
    });
  }
}
