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
    
}