const { customError } = require("./custom-error");
const { badRequest } = require("./bad-request");
const { Unauthenticated } = require("./unauthenticated");

module.exports = {
  customError,
  badRequest,
  Unauthenticated,
};
