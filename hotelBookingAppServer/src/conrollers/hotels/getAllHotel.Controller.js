const Hotels = require("../../models/hotel.model.js");

const getAllHotelController = async (req, res) => {
  try {
    const allHotels = await Hotels.find();
    if (allHotels) {
      res.status(200).send({
        message: " successful ",
        data: allHotels,
      });
    } else {
      res.status(400).send({ message: " something worng" });
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = getAllHotelController;
