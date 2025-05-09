import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import activityRoutes from "./routes/activityRoutes.js";
import dbConnect from './config/dbConnect.js';
dotenv.config();

dbConnect();

const app = express();  
app.use(express.json());
const port = process.env.PORT || 3000;


app.use("/api/user", userRoutes);
app.use("/api/activities", activityRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})