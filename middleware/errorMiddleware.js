const { StatusCodes } = require("http-status-codes");
const { CustomError } = require("../errors")

const errorMiddleWare = (err, req, res, next) => {
  const errorObject = {};
  if ( err instanceof CustomError ){
    errorObject.status = err.status; 
    errorObject.message = err.message;
  } else {
    errorObject.err = err; 
    errorObject.message = "Unidentified error";
    errorObject.status = StatusCodes.INTERNAL_SERVER_ERROR;
  }
  res.status(errorObject.status).json(errorObject);
}

module.exports = {errorMiddleWare}