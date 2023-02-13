const Users = require("../../models/users.signup.model.js");

const getUsresByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findOne({ _id: id });
    if (user) {
      res.status(200).send({ data: user });
    } else {
      res.status(400).send({ message: "user not found" });
    }
  } catch (error) {
    res.status(404).send({ message: "user not found" + error.message });
  }
};
module.exports = getUsresByIdController;
