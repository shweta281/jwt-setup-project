const { StatusCodes } = require("http-status-codes");
const { customError } = require("./custom-error");

class Unauthenticated extends customError {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = { Unauthenticated };
