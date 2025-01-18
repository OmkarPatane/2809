import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose"
import { userRouter } from "./router/user.route.js";
import { foodRouter } from "./router/food.route.js";
const app=express();

// app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/foods",foodRouter)

app.listen(9000,async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("Database connected");
    console.log("server started at http://localhost:9000")
})