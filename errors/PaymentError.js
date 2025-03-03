const { StatusCodes } = require("http-status-codes");
const CustomError = require("./CustomError");

class PaymentError extends CustomError {
  constructor(message) {
    super(message, StatusCodes.PAYMENT_REQUIRED);
  }
}