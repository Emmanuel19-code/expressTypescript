import mongoose,{Schema} from "mongoose";
import { Appointment } from "../types/Interfaces";
import { IdenticationID } from "../utils/createID";

const appointmentSchema=new Schema<Appointment>({
    name:{
        type:String,
        required:true,   
    },
    email:{
        type:String
    },
    service:{
        type:String
    },
    phone:{
        type:String,
        minlength:10,
        maxlength:10,
    },
    date:{
        type:String,
        required:true,
        trim:true
    },
    time:{
        type:String,
        trim:true
    },
    doctor:{
        type:String
    },
    status:{
        type:String,
        enum:['pending','canceled','attended'],
        default:'pending'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'Profile',
      required: [true, 'Please provide user'],
    },
    appointmentId:{
        type:String,
        default:IdenticationID
    }
},{timestamps:true});

module.exports=mongoose.model<Appointment>('appointments',appointmentSchema);