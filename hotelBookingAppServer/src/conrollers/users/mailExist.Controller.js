const Users = require("../../models/users.signup.model.js");

const mailExistController = async (req, res) => {
  try {
    const foundUser = await Users.findOne({ email: req.body.email });
    if (foundUser) {
      res.status(200).send({ messages: "user found" });
    } else {
      res.status(400).send({ messages: "user not found" });
    }
  } catch (error) {
    res.status(404).send({ messages: error });
  }
};

module.exports = mailExistController;
