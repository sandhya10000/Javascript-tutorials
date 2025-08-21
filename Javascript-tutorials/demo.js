/**
 * Question 1) JWT Authentication whole code
 * Json web token is used for authentication and authorization in NodeJs
 *
 * Steps: -
 * a) user logs in - server verifies the credential
 * b) Server generates the jwt with secret key
 * c) Client stores it in localstorage/cookies
 * d) Client sends in request header(Authorization: Bearer token) with requests.
 * e) Middleware verifies the JWT.
 *
 */
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const SECRET_KEY = "SECRET_KEY---__________";

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "12345") {
    const token = jwt.sign({ user: username }, SECRET_KEY, { expireIn: "1h" });
    return res.json({ token });
  }
  res.staus(401).json({ message: "Invalid Credentials" });
});

//Middleware for token verification.
function authenticateToken(req, res, next) {
  const authHeader = req.header["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing!" });
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: `welcome ${req.user.user}` });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
