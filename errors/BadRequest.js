const { StatusCodes } = require("http-status-codes");
const CustomError = require("./CustomError");

class BadRequest extends CustomError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = BadRequest;