import {Request,Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import BadRequest from "../Error/BadRequest"
import asyncHandler from 'express-async-handler';
import User from '../models/UserModel'


//create an account
const RegisterAccount = asyncHandler(async(req:Request,res:Response):Promise<void>=>{
   
})


//verify account
const VerifyAccount = asyncHandler(async(req:Request,res:Response) =>{

})



//login into account
const Login =asyncHandler(async(req:Request,res:Response) =>{

}) 



//reset account
const ResetPassword =asyncHandler(async(req:Request,res:Response) =>{

}) 


module.exports ={
    RegisterAccount,
    VerifyAccount,
    Login,
    ResetPassword
}