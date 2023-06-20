import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_IMAGE as string);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error when connecting to mongo");
    }
};

export default mongoConnect;