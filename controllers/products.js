const product = require("../models/productSchema");

const getAllProductStatic = async (req, res) => {
  const products = await product.find({});
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const products = await product.find(req.query);
  res.status(200).json({ products });
};

module.exports = { getAllProductStatic, getAllProducts };
