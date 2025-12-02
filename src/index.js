//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
//import { configDotenv } from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()

/*
import express from "express"
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.on("error",()=>{
            console.log("ERROR", error);
            throw error
            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}  `);
            
        })
    } catch (error) {
        console.log("ERROr",error)
        throw err
        
    }
})()
    */