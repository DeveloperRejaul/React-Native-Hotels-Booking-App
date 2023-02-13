const { uuid } = require("uuidv4");
const Users = require("../../models/users.signup.model.js");

const signupController = async (req, res) => {
  try {
    // Chack User Exist
    const newUser = await new Users({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    });
    await newUser.save();
    res.status(200).send({ message: "user save to databass" });
  } catch (error) {
    await res.status(404).send({
      message: "error: " + error,
    });
  }
};

module.exports = signupController;
