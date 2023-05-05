import { type Response, type Request } from "express";
import thingsAlredyKnow from "../../data/thingsAlreadyKnow.js";
import { type ThingAlreadyKnowStructure } from "../../types.js";

export const getThingsAlreadyKnow = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlredyKnow });
};

export const getSingleThingAlreadyKnow = (req: Request, res: Response) => {
  const id = req.params.idThing;
  const thingToGet = thingsAlredyKnow.find((thing) => thing.id === +id);

  res.status(200).json({ thingToGet });
};

export const deleteSingleThingAlreadyKnow = (req: Request, res: Response) => {
  const id = req.params.idThing;
  const thingToDelete = thingsAlredyKnow.filter((thing) => thing.id !== +id);

  res.status(200).json({ thingToDelete });
};

export const addSingleThingAlreadyKnow = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingAlreadyKnowStructure
  >,
  res: Response
) => {
  const thingToAdd = req.body;
  thingsAlredyKnow.push({ ...thingToAdd, id: Date.now() });

  res.status(201).json({ thingsAlredyKnow });
};
