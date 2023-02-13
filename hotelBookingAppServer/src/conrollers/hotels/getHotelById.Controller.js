const Hotels = require("../../models/hotel.model.js");

const getHotelByIdController = async (req, res) => {
  const id = req.body.id;

  try {
    const Hotel = await Hotels.findOne({ _id: id });
    if (Hotel) {
      res.status(200).send({
        message: " successful ",
        data: Hotel,
      });
    } else {
      res.status(400).send({ message: " something worng" });
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = getHotelByIdController;
