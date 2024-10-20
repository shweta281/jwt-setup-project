const { StatusCodes } = require("http-status-codes");
const { customError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.statusCode).json({ msg: err.msg });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "something went wrong..." });
};

module.exports = errorHandler;
