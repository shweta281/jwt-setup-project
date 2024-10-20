const { StatusCodes } = require("http-status-codes");
const { customError } = require("./custom-error");

class badRequest extends customError {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = { badRequest };
