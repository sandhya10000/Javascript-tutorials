import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Form from "./models/form.js";
import User from "./models/users.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

//connect db

mongoose.connect("mongodb://localhost:27017/akps");

//Middleware verify Jwt
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token.split(" ")[1], "SECRET_KEY", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

//admin protected route
app.get("/api/admin/data", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    //Fetch data from mongodb
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
