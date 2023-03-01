import {NextFunction, Request, Response} from "express";
import {UserRepositorio} from "../repositorio/user.repositorio";

export async function userExistDB(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {uidUser} = req.body;
  const repositorio = new UserRepositorio();
  const userExist = await repositorio.userExist(uidUser);
  if (!userExist) {
    return res.status(408).json({
      error: "Usuario não existe!",
    });
  }
  next();
}
