import { Router } from "express";
import {
  deleteSingleThingAlreadyKnow,
  getSingleThingAlreadyKnow,
  getThingsAlreadyKnow,
} from "../controllers/thingsAlreadyKnowControllers.js";

// eslint-disable-next-line new-cap
export const thingsAlreadyKnowRouter = Router();

thingsAlreadyKnowRouter.get("/things", getThingsAlreadyKnow);
thingsAlreadyKnowRouter.get("/things/:idThing", getSingleThingAlreadyKnow);
thingsAlreadyKnowRouter.delete(
  "/things/:idThing",
  deleteSingleThingAlreadyKnow
);
