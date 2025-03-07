// api/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");
const connectDB = require("./config/db");

console.log("Starting server initialization...");

const app = express();

console.log(
  "MONGO_URI:",
  process.env.MONGO_URI
    ? process.env.MONGO_URI.replace(/:\/\/.*@/, "://<hidden>@")
    : "Not defined"
);
console.log("CLIENT_URL:", process.env.CLIENT_URL || "Not defined");

// Connect to MongoDB (non-blocking)
console.log("Attempting MongoDB connection...");
connectDB()
  .then((connection) => {
    if (connection) {
      console.log("MongoDB connection process completed");
    } else {
      console.log("MongoDB connection unavailable, proceeding without DB");
    }
  })
  .catch((err) => {
    console.error("Unexpected error during MongoDB connection:", err.message);
  });

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Handling GET / request");
  res.send("Quick Poll Backend is running!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/poll", pollRoutes);

console.log("Server setup completed");

module.exports = app;