require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectdb = require("./db/connect");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/not-found");
const routes = require("./routes/main");

const app = express();

app.use(express.json());

app.use(express.static("./public"));

app.use("/api/v1", routes);

app.use(errorHandler);
app.use(notFound);

const port = 5000;

const start = () => {
  connectdb(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
  });
};

start();
