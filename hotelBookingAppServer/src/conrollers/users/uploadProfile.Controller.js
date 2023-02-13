const Users = require("../../models/users.signup.model.js");

const uploadProfileController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateProfilePicture = await Users.findOneAndUpdate(
      { id: id },
      {
        $set: {
          profileImage: req.file.filename,
        },
      },
      { new: true }
    );
    res.status(200).send({ data: updateProfilePicture });
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
module.exports = uploadProfileController;
