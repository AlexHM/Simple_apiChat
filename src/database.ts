import config from "./config/config";
import mongoose from "mongoose";

mongoose.connect(config.DB.URL_MONGO);
const connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connection stablished");
    
});

connection.on("error",(err)=>{
    console.log("MongoDB connection error: ",err);
    process.exit(0);
});

