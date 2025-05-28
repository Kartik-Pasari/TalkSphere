import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (e) {
    console.log("Mongo connection failed", e);
    process.exit(1);
  }
};
