import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userroute from "./routes/userroutes.js"
import messageRoute from "./routes/messageroute.js"
import { app, server } from "./socketio/server.js";


dotenv.config();

const PORT = process.env.PORT || 5001;
const DB = process.env.DB_URI;
try {
    mongoose.connect(DB).then(console.log("MONGODB connected"));
} catch (error) {
    console.log("error" + error);
}
app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.use('/api/user', userroute);
app.use('/api/message', messageRoute)

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})