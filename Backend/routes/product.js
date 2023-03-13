const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate.js");
const productController = require("../controllers/productController.js");

router
  .route("/getProductData")
  .get(authenticate, productController.getProducts);
router
  .route("/transactionData")
  .post(authenticate, productController.getTransactionData);
module.exports = router;
