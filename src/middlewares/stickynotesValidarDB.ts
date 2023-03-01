import {NextFunction, Request, Response} from "express";

export function stickynoteValidoDB(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {title, description} = req.body;
  if (!title || !description) {
    res.status(400).json({
      sucesso: false,
      mensagem: "É preciso preencher todos os campos!",
    });
  }
  next();
}
