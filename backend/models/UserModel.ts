import mongoose,{ Schema } from "mongoose";
import { UserType } from "../types/Interfaces";


const ProfileSchema=new Schema<UserType>({
  firstname:{
    type:String,
    required:[true,'please provide a name']
  },
  lastname:{
    type:String,
    required:[true,'please provide your lastname'],
  },
  gender:{
    type:String,
    required:[true,'please provide your gender']
  },
 email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  password:{
    type:String,
    required:[true,'please provide your password'],
    minlength:8,
    unique:true
  },
  verified:{
    type:Boolean,
    required:true,
    default:false
  },
  status:{
     type:String,
     required:[true,'Please provide your status'],
     default:'Client'
  }
})

const User = mongoose.models.Profile || mongoose.model<UserType>('Profile',ProfileSchema)
export default User