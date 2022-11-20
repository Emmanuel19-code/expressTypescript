import {Request,Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import BadRequest from "../Error/BadRequest"
import asyncHandler from 'express-async-handler';
import worker from '../models/workerModel';

//create an account
const RegisterAccount = asyncHandler(async(req:Request,res:Response) =>{
   const name =await worker.create(req.body) 
   res.json({msg:name})
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