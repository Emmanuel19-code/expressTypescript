import mongoose from "mongoose";
import { MONGO_URI } from "./config";

export const connection =async() =>{
 try {
    await mongoose.connect("mongodb+srv://EmmanuelBos:b125%40sah@cluster0.aoatdtv.mongodb.net/clinicDetails?retryWrites=true&w=majority")
    console.log("connected")
 } catch (error) {
    console.log("an error occured");
 }
}