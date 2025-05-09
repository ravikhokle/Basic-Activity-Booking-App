import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const DBConnect = async () =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to database");
    } catch (error) {
        console.log("Connection Problem:", error.message);
    }
}

export default DBConnect;
