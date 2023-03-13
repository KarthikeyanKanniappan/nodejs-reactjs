const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const authenticate = require("../middleware/authenticate.js");

router.route("/addrelation").post(authenticate, userController.addRelations);
router.route("/get").get(authenticate, userController.getData);
router.route("/update").put(authenticate, userController.updateData);
router
  .route("/getParticular")
  .post(authenticate, userController.particularData);
router.route("/del").post(authenticate, userController.deleteData);

// router.route("/add").post(userController.add);
// router.route("/updateAbout").put(userController.update);
module.exports = router;
