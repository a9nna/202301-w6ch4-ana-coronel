import { type Response, type Request } from "express";
import thingsAlredyKnow from "../thingsAlreadyKnow.js";

export const getThingsAlreadyKnow = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlredyKnow });
};
