import { type Response, type Request } from "express";
import thingsAlredyKnow from "../thingsAlreadyKnow.js";

export const getThingsAlreadyKnow = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlredyKnow });
};

export const getSingleThingAlreadyKnow = (req: Request, res: Response) => {
  const id = req.params.idThing;
  const thingToGet = thingsAlredyKnow.find((thing) => thing.id === +id);

  res.status(200).json({ thingToGet });
};
