require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");
const connectDB = require("./config/db");

const app = express();

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:5173",
  "https://quick-poll-app-lh7s.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Quick Poll Backend is running!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/poll", pollRoutes);

// Connect to MongoDB
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

module.exports = app;