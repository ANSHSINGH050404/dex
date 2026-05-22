import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { authenticate } from "./middleware/auth.js";
import { protectedRoute } from "./controllers/auth.controller.js";

dotenv.config();

const app = express();

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