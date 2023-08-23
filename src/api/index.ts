import express from "express";
import cors from 'cors'
const app = express();

app.use(cors({ origin: true }));
const routes = express.Router();
require("./brands").default(routes);
require("./product").default(routes);
require("./recharge").default(routes);
require("./retrait").default(routes);
require("./settings").default(routes);
require("./tasks").default(routes);
require("./vip").default(routes);
require("./auth").default(routes);
app.use("/api", routes);

export default app;
