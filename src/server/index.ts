import "../loadEnvironment.js";
import { serverStatus } from "../serverStatus.js";
import { Command } from "commander";
import morgan from "morgan";
import express from "express";
import { thingsAlreadyKnowRouter } from "./routes/thingsAlreadyKnowRoutes.js";

const program = new Command();
const port = process.env.PORT ?? 4000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/things", thingsAlreadyKnowRouter);

program.option("-s, --server", "Start server").action(() => {
  serverStatus(+port);
});

export default app;
