import {NextFunction, Request, Response} from "express";

export function userValidoDB(req: Request, res: Response, next: NextFunction) {
  const {name, password, email} = req.body;
  if (!name || !password || !email) {
    res.status(400).json({
      sucesso: false,
      mensagem: "É preciso preencher todos os campos!",
    });
  }
  next();
}
