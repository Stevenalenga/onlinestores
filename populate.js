require("dotenv").config();

const connectDB = require("./database/connect");

const Product = require("./models/productSchema");

const jsonProduct = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.create(jsonProduct);
    console.log("success....");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
