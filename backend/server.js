require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");
const connectDB = require("./config/db");

const app = express();

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173",          // Local frontend (adjust port if different)
  "https://poll-app-plum.vercel.app", // Deployed frontend domain
  process.env.CLIENT_URL,           // Additional client URL from .env
].filter(Boolean);

console.log(process.env.CLIENT_URL)
// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
     
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log(`CORS blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // If you’re using cookies or auth tokens
  })
);

app.options("*", cors());


app.use(express.json());

// Routes
app.get("/", (req, res) => {
  console.log("Handling GET / request");
  res.send("Quick Poll Backend is running!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/poll", pollRoutes);

// Connect to MongoDB
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;