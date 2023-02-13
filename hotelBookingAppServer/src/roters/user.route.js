const { Router } = require("express");
const router = Router();
const getAllUsresController = require("../conrollers/users/getUser.controller.js");
const getUsresByIdController = require("../conrollers/users/getUsresById.Controller.js");
const loginController = require("../conrollers/users/login.Controller.js");
const mailExistController = require("../conrollers/users/mailExist.Controller.js");
const signupController = require("../conrollers/users/signup.controller.js");
const updatePasswordController = require("../conrollers/users/updatePassword.Controller.js");
const updateUserController = require("../conrollers/users/updateUser.controller.js");
const uploadProfileController = require("../conrollers/users/uploadProfile.Controller.js");
const upload = require("../middelware/imageUpload.middelware.js");

router.put(
  "/uploadProfile/:id",
  upload.single("PROFILE_IMAGE"),
  uploadProfileController
);
router.put("/updatePassword", updatePasswordController);
router.post("/mailExist", mailExistController);
router.post("/login", loginController);
router.post("/signup", signupController);
router.put("/:id", updateUserController);
router.get("/:id", getUsresByIdController);
router.get("/", getAllUsresController);

module.exports = router;
