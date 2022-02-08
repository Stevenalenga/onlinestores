const express = require("express");

const router = express.Router();

const {
  getAllProductStatic,
  getAllProducts,
} = require("../controllers/products");

router.route("/").get(getAllProductStatic).get(getAllProducts);

module.exports = router;
