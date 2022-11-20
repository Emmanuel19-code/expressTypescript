 import mongoose,{ Schema } from "mongoose";
import {VerificationToken } from "../types/Interfaces"


const VerifyToken=new Schema<VerificationToken>({
 owner:{
    type: mongoose.Types.ObjectId,
    ref:'Profile',
    required:true
  },
  OneTimePassword:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    expires:'5m',
    default:Date.now()
  }
})