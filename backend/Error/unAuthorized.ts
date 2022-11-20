const { StatusCodes } = require('http-status-codes');
import CustomAPIError from "./custom-error"

class UnauthorizedError extends CustomAPIError {
    statusCode:number
  constructor(message:string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;