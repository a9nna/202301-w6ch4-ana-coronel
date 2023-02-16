import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";
import thingsAlredyKnow from "./thingsAlreadyKnow.js";

const app = express();
const debug = createDebug("main-module");
const port = process.env.PORT ?? 3784;

app.use(morgan("dev"));

app.get("/things", (req, res) => {
  res.status(200).json({ thingsAlredyKnow });
});

app.listen(port, () => {
  debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));
});
