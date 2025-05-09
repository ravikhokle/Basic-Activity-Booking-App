import express from 'express';
import DBConnect from './db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import activityRoutes from "./routes/activityRoutes.js";
dotenv.config();

DBConnect();

const app = express();  
app.use(express.json());
const port = process.env.PORT || 5000;


app.use("/api/user", userRoutes);
app.use("/api/activities", activityRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})