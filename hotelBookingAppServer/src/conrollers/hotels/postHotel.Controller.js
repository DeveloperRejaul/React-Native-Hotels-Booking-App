const Hotels = require("../../models/hotel.model.js");

const postHotelController = async (req, res) => {
  try {
    const {
      name,
      image,
      location,
      priceRange,
      reating,
      shourtDiscription,
      fullDiscription,
      amenities,
      roomDetals,
      reviews,
      rooms,
    } = req.body;

    const newHotel = new Hotels({
      name,
      image,
      location,
      priceRange,
      reating,
      shourtDiscription,
      fullDiscription,
      amenities,
      roomDetals,
      reviews,
      rooms,
    });

    await newHotel.save();
    res.status(200).send("data is savesd to databass");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = postHotelController;
