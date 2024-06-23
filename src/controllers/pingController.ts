import { Request, Response } from "express";

export const pingCheck = (_: Request, res: Response) => {
  return res.status(200).json({ msg: "Ping Check ok" });
};
