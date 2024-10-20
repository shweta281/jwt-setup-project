const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../errors");

const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader);
  const token = authHeader.split(" ")[1];
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Unauthenticated("No token auth present with this user");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new Unauthenticated("No token auth present with this user");
  }
};
module.exports = authenticationMiddleware;
