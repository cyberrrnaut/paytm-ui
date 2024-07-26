import express from "express";
import mainRouter from './routes/index.route.js';
import { connectDb } from "./database/index.db.js";
import { pingServer } from "./ping/pingserver.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to a path and get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Connect to the database
connectDb();

// Set up a periodic ping to keep the server active
setInterval(pingServer, 14 * 60 * 1000);

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Sample route
app.get("/hello", (req, res) => {
    res.status(201).json({ Hello: "World" });
})

// Main router
app.use("/api/v1", mainRouter);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`);
});
