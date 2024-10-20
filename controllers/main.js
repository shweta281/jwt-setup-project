require("express-async-errors");
require("dotenv");
const jwt = require("jsonwebtoken");
const { badRequest } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new badRequest("please provide data");
  }
  const token = jwt.sign({ id: 1, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  
    // console.log(req.user.username);
    
    // console.log(token);

    // console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        msg: `Hello, ${req.user.username}`,
        secret: `Youre lucky number is ${luckyNumber}`,
      });
};

module.exports = { login, dashboard };
