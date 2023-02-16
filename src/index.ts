import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";
import thingsAlredyKnow from "./thingsAlreadyKnow.js";

const app = express();
const debug = createDebug("main-module");
const port = process.env.PORT ?? 4000;

app.use(morgan("dev"));

app.get("/things", (req, res) => {
  debug(chalk.cyanBright("You've got your things already know list"));
  res.status(200).json({ thingsAlredyKnow });
});

app.get("/things/:idThing", (req, res) => {
  const id = req.params.idThing;
  const thingToGet = thingsAlredyKnow.find((thing) => thing.id === +id);

  debug(chalk.cyanBright("You've got your thing already know"));
  res.status(200).json({ thingToGet });
});

app.delete("/things/:idThing", (req, res) => {
  const id = req.params.idThing;
  const thingToDelete = thingsAlredyKnow.filter((thing) => thing.id !== +id);

  debug(chalk.cyanBright(`You've delete the thing already know nº${id}`));
  res.status(200).json({ thingToDelete });
});

app.listen(port, () => {
  debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));
});
