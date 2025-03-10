require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Define allowed origins
const allowedOrigins = [
  "https://pollwithme.vercel.app/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("Request origin:", origin);
      if (!origin) {
        console.log("No origin, allowing request");
        return callback(null, true);
      }
      const isAllowed = allowedOrigins.some((allowed) =>
        origin === allowed || origin.startsWith("https://") && origin.includes("vercel.app")
      );
      if (isAllowed) {
        console.log(`Origin ${origin} allowed`);
        callback(null, true);
      } else {
        console.log(`CORS blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS"), false);
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ error: "CORS policy violation" });
  }
  next(err);
});

app.options("*", cors());

app.use(express.json());


const uploadsDir = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadsDir));


const sanitizeFileName = (filename) => filename.replace(/ /g, "_");

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
