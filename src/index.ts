import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";

const app = express();
const debug = createDebug("main-module");
const port = process.env.PORT ?? 3784;

app.use(morgan("dev"));

app.listen(port, () => {
  debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));
});
