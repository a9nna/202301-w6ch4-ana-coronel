import "./loadEnvironment.js";
import express, { type Response, type Request } from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";
import thingsAlredyKnow from "./thingsAlreadyKnow.js";
import { type ThingAlreadyKnowStructure } from "./types.js";
import { thingsAlreadyKnowRouter } from "./routes/thingsAlreadyKnowRoutes.js";

const app = express();
const debug = createDebug("main-module");
const port = process.env.PORT ?? 4000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/", thingsAlreadyKnowRouter);

app.delete("/things/:idThing", (req: Request, res: Response) => {
  const id = req.params.idThing;
  const thingToDelete = thingsAlredyKnow.filter((thing) => thing.id !== +id);

  debug(chalk.cyanBright(`You've delete the thing already know nº${id}`));
  res.status(200).json({ thingToDelete });
});

app.post(
  "/things",
  (
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      ThingAlreadyKnowStructure
    >,
    res: Response
  ) => {
    const thingToAdd = req.body;
    thingsAlredyKnow.push({ ...thingToAdd, id: Date.now() });

    debug(chalk.cyanBright("You've added a new thing already know"));
    res.status(201).json({ thingsAlredyKnow });
  }
);

app.listen(port, () => {
  debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));
});
