const Users = require("../../models/users.signup.model.js");

const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundUser = await Users.findOne({ username: username });
    if (foundUser) {
      if (foundUser.password == password) {
        res.status(200).send({ message: "User isOK", data: foundUser });
      } else {
        res.status(202).send({ message: "password invalid" });
      }
    } else {
      res.status(400).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(404).send({
      message: "error" + error.message,
    });
  }
};

module.exports = loginController;
