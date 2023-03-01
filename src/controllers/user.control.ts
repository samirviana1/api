import {Request, Response} from "express";
import {UserRepositorio} from "../repositorio/user.repositorio";

export class UserControl {
  async create(req: Request, res: Response) {
    const {name, email, password} = req.body;
    const repositorio = new UserRepositorio();
    const user = await repositorio.createUser(name, email, password);
    return res.status(200).json({
      success: true,
      data: user,
    });
  }

  async loginUser(req: Request, res: Response) {
    const {email, password} = req.body;
    const repositorio = new UserRepositorio();
    const user = await repositorio.userLogin(email, password);
    if (!user) {
      return res.status(400).json({error: "senha ou e-mail não conferem! "});
    } else {
      return res.status(200).json({
        success: true,
        data: user,
      });
    }
  }
}
