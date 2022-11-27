import {config} from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import usersRouter from "./routers/usersRouter.js";
import authRouter from "./routers/authRouter.js";

config()

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_DOMAIN,
    credentials: true
}));

app.use(helmet());

app.use(express.json());

app.use(usersRouter);
app.use(authRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server is running on port:", PORT));
