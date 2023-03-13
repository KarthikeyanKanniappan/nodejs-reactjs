const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const authenticate = require("../middleware/authenticate.js");

router.route("/login").post(authenticate, authController.login);
module.exports = router;
