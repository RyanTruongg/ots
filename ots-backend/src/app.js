import express from "express";
import cors from "cors";
import morgan from "morgan";

import logger, { stream } from "./configs/logger.js";
import route from "./routes.js";

const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 5000;

// Middlewares
app.use(express.json()); // XMLHttpRequest, ajax, fetch,...
app.use(express.urlencoded({ extended: true })); // FormData
app.use(cors());
app.use(morgan("tiny", { stream }));

route(app);

app.listen(BACKEND_PORT, () => {
  logger.info(`App listening at: http://localhost:${BACKEND_PORT}`);
});
