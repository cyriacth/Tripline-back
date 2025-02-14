import express, { Request, Response } from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables
const app = express();
const PORT = 3000;
connectDB();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});