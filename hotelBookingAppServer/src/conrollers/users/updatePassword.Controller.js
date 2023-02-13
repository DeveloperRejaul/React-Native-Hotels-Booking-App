const Users = require("../../models/users.signup.model.js");

const updatePasswordController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const updatePass = await Users.findOneAndUpdate(
      { email: email },
      {
        $set: {
          password: password,
        },
      }
    );
    if (updatePass) {
      res.status(200).send({ messages: "user passwors update" });
    } else {
      res.status(400).send({ messages: "user passwors update faild" });
    }
  } catch (error) {
    res.status(404).send({ messages: error });
  }
};
module.exports = updatePasswordController;
