// config/db.js
const mongoose = require("mongoose");

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    console.log("Reusing existing MongoDB connection");
    return cachedConnection;
  }

  try {
    console.log("Establishing new MongoDB connection...");
    cachedConnection = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
      connectTimeoutMS: 30000, 
      socketTimeoutMS: 45000, 
    });
    console.log("MongoDB connected successfully");
    return cachedConnection;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    cachedConnection = null; 
    return null; 
  }
};

module.exports = connectDB;