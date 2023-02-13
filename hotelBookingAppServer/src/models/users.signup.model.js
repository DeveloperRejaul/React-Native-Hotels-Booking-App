const mongoose = require("mongoose");
const { uuid } = require("uuidv4");
const profileImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUBBAYCB//EADIQAQABAwEDBw0BAQAAAAAAAAABAgMEEQUSITEyNEFRcbEVIiNCUlNhYnJzkqHhwRP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APogDbIAAAAAAAAAAAAAAM6AMAAAAAACfGxL+TPo6Y3fankb1GxtY8+9GvywVVULS5saqI9HeiZ7JhX3rF2xVu3aJp7J6pSiMBUAAAAAAAAAAGzg4s5V7cnmRxq7mtK82Jb3MWa5jjXP6TVb1FFNFMU0xpERpEQ9MsMqIsmzTftVW644TyfBKyDlr1qqzcqt186JRrTblqIu27sRzo0mVW1moAKgAAAAAAABLotl9Btd0+LnV3sW7FWPNvXjRPJ8JTVWQDKgEgq9ux6C39f+KZZbdu71yi3E82NZVsNYgEioAAAAAAAAJ8PInGvxcjjHJVHbCANV1Vqum5RFdE60zyPbmcXLvYusW5jd9meRYW9tU7sf9LNW98ssxVsgzMmjGs1V1cvqx2yrru2ZmNLNrSe2tXZGRcyLm/dq1nq+BEebtdV27VcqnWap1eQaQAAAAAAAAGY4zpHKt9n7NimIuZFMTV1Uz1G6qvx8PIyONFGlPtTwhu0bGq08+9Ed1K35GWaqp8ix7+fxY8ix7+fx/q3EoqPIse/n8f6eRY9/P4/1bi0Ulex70cy7RV3xMNO/iZFiJm5aqiO2OMOnYmNSpHJi32hs2JibuNTpPrUR19yoaAAQAAA5eECrLY2Nv3Jv1x5tPCnXtXaLGtRYsUW49WP2lYUAAAAAAAAUO1saLF+LlEeZc/Ur5pbXo3sGueumYqXBz4QNMgACTHjeyLVPbXEftGmxOl2fuU+IOnAYaAAAAAAAAGvtDoN/6JbCHNjXEvR8k+AOYAbQAEE2J0qz9ynxAHTgMNAAAAAAAACLJ6Nd+ifAAcvADaAAj//Z";
const userSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuid(),
  },
  username: {
    type: String,
    required: true,
    unique: [true, "username is alredy exiest"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email is alredy exiest"],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: [true, "phone number is alredy exiest"],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  profileImage: {
    type: String,
    default: profileImage,
  },
  dateOfBirth: { type: String, default: null },
  gender: {
    type: String,
    default: null,
  },
  acountCreateDate: {
    type: String,
    default: new Date().toLocaleString(),
  },
});

const Users = mongoose.model("usersData", userSchema);
module.exports = Users;
