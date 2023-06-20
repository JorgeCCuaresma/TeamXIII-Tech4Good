import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoConnect = async () => {
    try {
        mongoose.connect(process.env.MONGO_LOCAL as string);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error when connecting to mongo");
    }
};

export default mongoConnect;