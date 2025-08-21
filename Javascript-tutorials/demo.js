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

/**
 * Question 2) Middleware explanation
 * Middleware in express - functions are run between request and response
 * They can modify request.response object execute code and terminate request.
 *
 * Types:
 * Route level
 * Application-level
 * Built-in(express.json())
 * Third party (bodyParser,morgan)
 * Error handling
 */

app.get("", (req, res, next) => {
  console.log(`Middleware execute at `, Date.now());
  next(); //Pass control to next middleware
});

/**
 * Question 3) Transaction
 * Transcation is sequence of database operation that all execute together(all succeed or all rollback)
 */

const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.create([{ name: "Sandhya" }], { session });
  await Order.create([{ item: "Book", user: "Sandhya" }], { session });
  await session.commitTransaction(); // success
} catch (error) {
  await session.abortTransaction(); // rollback
}
session.endSession();

/**
 * Question 4) Flatten single array
 *
 */

function run(rawArr) {
  let res = [];
  for (let item of rawArr) {
    if (Array.isArray(item)) {
      const array = run(item);
      res.push(...array);
    } else {
      res.push(item);
    }
  }
  return res;
}
let arr = [1, 2, [3], [4, 5], 6, [7, 8], 9];
console.log(run(arr));
//output: [1,2,3,4,5,6,7,8,9]

/**
 * 5) Normalization and types

Normalization → Process of organizing DB tables to reduce redundancy and improve data integrity.
Types (Normal Forms):

1NF – Atomic values (no repeating groups).

2NF – 1NF + no partial dependency (every non-key depends on whole key).

3NF – 2NF + no transitive dependency.

BCNF – Stronger version of 3NF.
 */

/**
 * 6) for(var i=0; i<5;i++) { setTimeout... }
 */
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//Output: 5 5 5 5 5 (because var is function-scoped, not block-scoped, loop completes before timeout executes).

/** Question 7) How to print 1 to 4 in output above question
 * Solution → use let or IIFE.
 *
 */
for (let i = 1; i <= 4; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 1 2 3 4

/**
 *Question 8) Difference between client side and server side

Client-side: Runs in browser (HTML, CSS, JS). Handles 
UI, validation, rendering.

Server-side: Runs on server (Node.js, Java, Python).
 Handles DB operations, authentication, API responses.
 */
