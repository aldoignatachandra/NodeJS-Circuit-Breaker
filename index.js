import express from "express";
import pino from "pino";
import checkoutRoute from "./src/routes/checkout.js";
import userRoute from "./src/routes/user.js";

const log = pino({ transport: { target: "pino-pretty" } });
const app = express();

app.use(express.json());
app.use("/checkout", checkoutRoute);
app.use("/user", userRoute);

app.get("/health", (_req, res) => res.send("ok"));

const port = 3000;
app.listen(port, () => log.info(`Server start on port :${port}`));
