import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const connectDb = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db connected");
}

export { connectDb };