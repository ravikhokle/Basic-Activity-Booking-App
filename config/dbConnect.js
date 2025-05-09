import mongoose from "mongoose";

const DBConnect = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Conneted to database");
    } catch (error) {
        console.log("Connetion Problem:", error.message);
    }
}

export default dbConnect;
