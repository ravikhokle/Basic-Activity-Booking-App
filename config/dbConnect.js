import mongoose from "mongoose";

const DBConnect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conneted to database");
    } catch (error) {
        console.log("Connetion Problem:", error.message);
    }
}

export default DBConnect;
