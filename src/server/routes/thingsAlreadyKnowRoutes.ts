import { Router } from "express";
import {
  addSingleThingAlreadyKnow,
  deleteSingleThingAlreadyKnow,
  getSingleThingAlreadyKnow,
  getThingsAlreadyKnow,
} from "../controllers/thingsAlreadyKnowControllers.js";

// eslint-disable-next-line new-cap
export const thingsAlreadyKnowRouter = Router();

thingsAlreadyKnowRouter.get("/", getThingsAlreadyKnow);
thingsAlreadyKnowRouter.get("/:idThing", getSingleThingAlreadyKnow);
thingsAlreadyKnowRouter.delete("/:idThing", deleteSingleThingAlreadyKnow);
thingsAlreadyKnowRouter.post("/", addSingleThingAlreadyKnow);
