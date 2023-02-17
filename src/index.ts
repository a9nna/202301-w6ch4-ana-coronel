import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";
import { thingsAlreadyKnowRouter } from "./routes/thingsAlreadyKnowRoutes.js";

const app = express();
const debug = createDebug("main-module");
const port = process.env.PORT ?? 4000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/things", thingsAlreadyKnowRouter);

app.listen(port, () => {
  debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));
});
