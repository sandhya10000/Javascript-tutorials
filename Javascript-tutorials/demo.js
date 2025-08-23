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

/**JWT ANOTHER WAY TO WRITE 
 * question.txt;
// index.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());                    // body parser

// ---- Mongo connect ----
mongoose.connect(process.env.MONGO_URI, { dbName: "mernauth" })
  .then(()=>console.log("Mongo connected"))
  .catch(err=>console.error("Mongo error:", err));

// ---- User model ----
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  name: String
});
const User = mongoose.model("User", userSchema);

// ---- Helpers ----
const signToken = (user) =>
  jwt.sign({ sub: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

const auth = (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Missing token" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET); // {sub, email, iat, exp}
    next();
  } catch {
    res.status(401).json({ message: "Invalid/expired token" });
  }
};

// ---- Routes ----
app.post("/api/register", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) 
  return res.status(400).json({ message: "email & password required" });
  const existing = await User.findOne({ email });
  if (existing) 
  return res.status(409).json({ message: "Email already registered" });
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({ email, passwordHash, name });
  const token = signToken(user);
  res.status(201).json({ token, user: { id: user._id, email: user.email, name: user.name } });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });
  const token = signToken(user);
  res.json({ token });
});

app.get("/api/me", auth, async (req, res) => {
  const user = await User.findById(req.user.sub).select("-passwordHash");
  res.json(user);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server on", PORT));

*/

/**
 * Question 2) Middleware explanation
 * Middleware in express - functions are
 * run between request and response
 * They can modify request.response object
 *  execute code and terminate request.
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
 * Transcation is sequence of database
 * operation that all execute together(all succeed or all rollback)
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

Normalization → Process of organizing DB tables to
 reduce redundancy and improve data integrity.
Types (Normal Forms):

1NF – Atomic values (no repeating groups).

2NF – 1NF + no partial dependency (every non-key 
depends on whole key).

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
//Output: 5 5 5 5 5 (because var is function-scoped,
// not block-scoped, loop completes before timeout executes).

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

/**
  * Question 9) What are body-parser and Express?

Express: minimal Node web framework (routing, middleware).

body-parser: middleware to parse request bodies.
 Since Express 4.16+, use built-ins:

express.json() for JSON

express.urlencoded({ extended: true }) for form post */

/**
 * Question 10) What are body-parser and Express?
 * body parser is middleware to parse request bodies in json().
 */

/**
 * Question 11) useState vs useEffect (React)

useState: store component state; setting it triggers re-render.

useEffect: run side-effects after render 
(fetching, subscriptions). Control with dependency array.
 */
function Profile({ id }) {
  const [user, setUser] = useState(null); // useState
  useEffect(() => {
    // useEffect
    let alive = true;
    fetch(`/api/users/${id}`)
      .then((r) => r.json())
      .then((d) => alive && setUser(d));
    return () => {
      alive = false;
    }; // cleanup
  }, [id]);
  return <pre>{JSON.stringify(user)}</pre>;
}

/**
 * 12) State vs Props

Props: read-only inputs from parent; immutable in child.

State: internal, mutable via setters; owned by the component.
 */

/**
 * Question 14) “Stores the reference in useState”

useState can hold any value including object/function 
references; updating to a new reference re-renders. 
If you need a stable, mutable reference that does 
not cause re-renders, use useRef.
 */
const [obj, setObj] = useState({ n: 1 }); // new object -> re-render
const ref = useRef(null); // mutate ref.current without re-render

/**Question 15) Promises & types

States: pending → fulfilled (resolved) or rejected.

Creation: new Promise((res, rej)=>{}) or async functions (return a Promise).

Combinators: Promise.all, allSettled, race, any. */
async function demo() {
  const a = Promise.resolve(1);
  const b = Promise.reject("erro").catch((e) => e);
  const res = await Promise.allSettled([a, b]);
  console.log(res);
}
demo();
/**
 *Output: - [
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 'erro' }
]
 */

/**
 * Question 16) Hoisting

Function declarations hoisted with body.

var declarations hoisted as undefined.

let/const hoisted but in Temporal Dead Zone until initialized.
 */
console.log(x); // undefined (var)
var x = 10;

foo(); // works
function foo() {}

bar(); // TypeError: bar is not a function
var bar = function () {};

/**
 * | Declaration | Hoisted? | Initialized? | Before initialization behavior |
| ----------- | -------- | ------------ | ------------------------------ |
| `var`       | ✅ Yes    | `undefined`  | `undefined` (not error)        |
| `function`  | ✅ Yes    | Full body    | Works normally                 |
| `let`       | ✅ Yes    | ❌ No (TDZ)   | `ReferenceError`               |
| `const`     | ✅ Yes    | ❌ No (TDZ)   | `ReferenceError`               |


var → hoisted, initialized with undefined.

function → fully hoisted (safe to call early).

var + function expression → declaration hoisted, assignment not hoisted → TypeError.

let/const → hoisted but TDZ → ReferenceError.
 */
console.log(v); // undefined
var v = 1;

console.log(l); // ❌ ReferenceError (TDZ)
let l = 2;

console.log(c); // ❌ ReferenceError (TDZ)
const c = 3;

/**
 * Question 17) Angular vs React

Type: Angular = full framework (opinionated, DI, RxJS, CLI); React = UI library (bring your own router/state).

Language: Angular uses TypeScript by default; React supports JS/TS.

Rendering: Angular zone change detection; React reconciliation/virtual DOM with hooks.

Data flow: Angular two-way binding (ngModel) + RxJS; React one-way data flow; controlled components.

Learning curve: Angular heavier upfront; React smaller core but many choices.
 */
