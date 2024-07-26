import express from "express";
import mainRouter from './routes/index.route.js';
import { connectDb } from "./database/index.db.js";
import { pingServer } from "./ping/pingserver.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

connectDb();

setInterval(pingServer, 14 * 60 * 1000);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
    res.status(201).json({ Hello: "World" });
})

app.use("/api/v1", mainRouter);

app.listen(process.env.PORT, () => {
    console.log(`server started on port: ${process.env.PORT}`);
});