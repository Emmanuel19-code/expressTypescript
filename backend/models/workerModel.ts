 import mongoose,{ Schema } from "mongoose";
import { Workers } from "../types/Interfaces"
 import {v4 as uuidv4} from 'uuid';



 const EmployeeId:string=uuidv4().split('-')[0]


 const workerSchema = new Schema<Workers>({
     firstname:{
    type:String,
    required:[true,'please provide a name']
  },
  lastname:{
    type:String,
    required:[true,'please provide your lastname'],
  },
  EmployeeId:{
    type:String,
    default:EmployeeId
  } ,
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
     enum:['Patient','worker'],
     default:'Patient'
  }
  })


const worker = mongoose.models.workers || mongoose.model<Workers>('workers',workerSchema)
export default worker