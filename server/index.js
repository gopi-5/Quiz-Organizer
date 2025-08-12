const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const UserModel = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle bad JSON payloads gracefully
app.use((err, req, res, next) => {
  if (err && err.type === "entity.parse.failed") {
    return res.status(400).json({ success: false, message: "Invalid JSON payload" });
  }
  next(err);
});

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/quizorganizer";
const PORT = process.env.PORT || 3001;

let isDatabaseConnected = false;
const inMemoryUsersByEmail = new Map();

mongoose
  .connect(MONGO_URI)
  .then(() => {
    isDatabaseConnected = true;
    console.log("MongoDB connected");
  })
  .catch((error) => {
    isDatabaseConnected = false;
    console.warn(
      "MongoDB connection failed. Falling back to in-memory store. Set MONGO_URI to enable database.",
      error.message
    );
  });

async function findUserByEmail(email) {
  if (isDatabaseConnected) {
    return UserModel.findOne({ email });
  }
  return inMemoryUsersByEmail.get(email) || null;
}

async function createUser({ name, email, password }) {
  if (isDatabaseConnected) {
    return UserModel.create({ name, email, password });
  }
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const user = { _id: id, name, email, password };
  inMemoryUsersByEmail.set(email, user);
  return user;
}

// Healthcheck
app.get("/health", (req, res) => {
  res.json({ status: "ok", db: isDatabaseConnected ? "connected" : "memory" });
});

// Auth routes
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await createUser({ name, email, password: hashedPassword });

    return res.status(201).json({
      success: true,
      user: { id: createdUser._id, name: createdUser.name, email: createdUser.email },
      storage: isDatabaseConnected ? "database" : "memory",
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    return res.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
      storage: isDatabaseConnected ? "database" : "memory",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Backwards compatibility with existing frontend endpoints
app.post("/", async (req, res) => {
  req.url = "/api/auth/register";
  return app._router.handle(req, res);
});

app.post("/login", async (req, res) => {
  req.url = "/api/auth/login";
  return app._router.handle(req, res);
});

// Not found handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});