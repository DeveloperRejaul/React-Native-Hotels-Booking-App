const Users = require("../../models/users.signup.model.js");

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { username, email, phoneNumber, dateOfBirth, gender } = req.body;
  const updatedUser = await Users.findOneAndUpdate(
    { id: id },
    {
      $set: {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        gender: gender,
      },
    },
    { new: true }
  );
  res.send({ data: updatedUser });
};

module.exports = updateUserController;
