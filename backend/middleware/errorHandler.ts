import {NextFunction,Request,Response} from "express"
import CustomAPIError from "../Error/custom-error"
const { StatusCodes } = require('http-status-codes')

export const errorHandlerMiddleware = (
    err:CustomAPIError,
    req:Request, 
    res:Response, 
    next:NextFunction
    ) => {
  if (err instanceof CustomAPIError) {
    return res.json({ msg: err.message })
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later')
}

//module.exports = errorHandlerMiddleware