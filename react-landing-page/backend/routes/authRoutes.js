import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";

const router = express.Router();

//api route for post
router.post("/forms", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ success: true, message: "Form saved!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
// //fetch all submission which is in admin panel
// app.get("/forms", async (req, res) => {
//   try {
//     const forms = await Form.find();
//     res.json(forms);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch forms" });
//   }
// });

/// api for register
router.post("/register", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed, role });
    await user.save();
    res.json({ message: "User Created" });
  } catch (error) {
    res.status(500).json({ error: "User registration failed!" });
  }
});

//api for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User Not Found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credential" });

    const token = jwt.sign({ id: user._id, role: user.role }, "SECRET_KEY", {
      expiresIn: "1h",
    });
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: "Login failed!" });
  }
});

export default router;
