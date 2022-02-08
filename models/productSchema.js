const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a product name"],
  },
  price: {
    type: Number,
    required: [true, "please provide a price for your product"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 2.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{Value} is not supported",
    },
  },
});
module.exports = mongoose.model("Product", productSchema);
