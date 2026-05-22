import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { authenticate } from "./middleware/auth.js";
import { protectedRoute } from "./controllers/auth.controller.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.get("/protected", authenticate, protectedRoute);
app.get("/health",(req,res)=>{
  res.send("OK");
})

app.listen(8080, () => {
  console.log("Server running on port 8080");
});