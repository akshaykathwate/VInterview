import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async() =>{

    try {
        const  conn = await mongoose.connet(ENV.DB_URL);
        console.log("Connected to Mongodb :"+ conn);
    } catch (error) {
        console.log("Error in connecting DB");
    }
    
}