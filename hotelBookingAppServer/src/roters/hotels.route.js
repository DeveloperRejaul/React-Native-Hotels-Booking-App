const { Router } = require("express");
const getAllHotelController = require("../conrollers/hotels/getAllHotel.Controller.js");
const getHotelByIdController = require("../conrollers/hotels/getHotelById.Controller.js");
const postHotelController = require("../conrollers/hotels/postHotel.Controller.js");
const router = Router();

router.post("/", postHotelController);
router.get("/:id", getHotelByIdController);
router.get("/", getAllHotelController);

module.exports = router;
