import dotenv from "dotenv";
import mongoose from "mongoose";
import { ENV } from "./env.js";

dotenv.config();

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw "DB_URL Not Avaible in Environment Variable..";
    }
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
};
