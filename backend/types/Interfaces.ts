import mongoose from "mongoose"

export interface UserType{
    firstname:string,
    lastname:string,
    gender:string,
    email:string,
    password:string,
    verified:boolean,
    status:string
}

export interface Workers{
    firstname:string,
    lastname:string,
    EmployeeId:string
    gender:string,
    email:string,
    password:string,
    verified:boolean,
    status:string
}

export interface VerificationToken {
    owner?:mongoose.Types.ObjectId,
    OneTimePassword:string,
    createdAt:Date
}

export interface Appointment{
    name:string,
    email:string,
    service:string,
    phone:string,
    date:string,
    time:string,
    doctor:string,
    status:String,
    createdBy?:mongoose.Types.ObjectId,
    appointmentId:string
}