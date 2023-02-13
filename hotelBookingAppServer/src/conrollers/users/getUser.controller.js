const Users = require("../../models/users.signup.model.js");

const getAllUsresController = async (req, res) => {
  try {
    const allUsers = await Users.find();
    if (allUsers) {
      res.status(200).send({
        message: " successful ",
        data: allUsers,
      });
    } else {
      res.status(400).send({ message: " something worng" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllUsresController;
