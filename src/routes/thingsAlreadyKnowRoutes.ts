import { Router } from "express";
import {
  getSingleThingAlreadyKnow,
  getThingsAlreadyKnow,
} from "../controllers/thingsAlreadyKnowControllers.js";

// eslint-disable-next-line new-cap
export const thingsAlreadyKnowRouter = Router();

thingsAlreadyKnowRouter.get("/things", getThingsAlreadyKnow);
thingsAlreadyKnowRouter.get("/things/:idThing", getSingleThingAlreadyKnow);
