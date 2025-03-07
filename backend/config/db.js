// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
      connectTimeoutMS: 10000, // Connection timeout
    });
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    // Don’t throw or exit; let the app continue
  }
};

module.exports = connectDB;