const { StatusCodes } = require('http-status-codes');
import CustomAPIError from "./custom-error"

class UnauthenticatedError extends CustomAPIError {
    statusCode:number
  constructor(message:string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;