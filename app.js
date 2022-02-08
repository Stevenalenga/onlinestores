require("dotenv").config();
require("express-async-errors");

//async errors

const express = require("express");
const app = express();

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/errorHandler");
const connectdb = require("./database/connect");
const products = require("./routes/products");

//middleware

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send(
    '<h1>Store API</h1> <a href = "/api/v1/products"> products route </a>'
  );
});
app.use("/api/v1/products", products);

//products route

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, console.log(`port is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
