const mongoose = require("mongoose");
const { uuid } = require("uuidv4");
const bannerImageUri =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAACOCAMAAADTsZk7AAAAD1BMVEXr6+v39/f09PTu7u7w8PBHPc6pAAABSUlEQVR4nO3b0W6DIBSA4Qq8/zNP01admhYQZuK+73JX5g85B9Ls8QAAAAAAAAAAAAAAAAAAAAAAAHKkEEK6+iNuLYZhEuLVH3JfcXgRuZswzJGv/pS7mo/xyEHuI2ncXdC4O+f4DyyJXSx6WQ6yZ8gp8cMRfU9kV7dTxowfHstpquwxfU74NgpiSmbxKclK621eagZuL6vHssh9xPVDTuQu1onXey/acq2kX4mXG9p0vN3Wmtgkni8X0cOulbhN/BrJ0W2ulRj2jaew0fO5maPEY9jg56VmjhMfjA5q7fbdIXvvhLzEfvw44XDfidxUdmIjuVZ+YpEr5Q7jJ3uvQllikSvk77s3e69UcWIjuVR5YpELlQ7jJyO5QF1ikUtUJrb3ClQ3NpKzadzf9I9gG8P+TwcMZAAAAAAAAAAAAAAAAAAAAAAA/qcfVokFwcQV/cEAAAAASUVORK5CYII=";
const roomImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAElBMVEXy8vL////6+vr19fX4+Pj8/Px/aeudAAACoklEQVR4nO3c227bMBBF0cgk//+XGwu6kRxeRnFaVGevt8a2AG3QQ0kN8vUFAAAAAAAAAAAAAAAAAAAAAACAv2j5Ba9/fVK/hVgOxHL4Prf0+qD08FgfPbfw8Fjpk8cjlgOxHIjlQCwHYjlIxgoh3DqeXqyQbl+Ky8VK551L9B5PLFb40X2eWKyf3RVrxUpFrMU36KVihbKV88pCKtarfjzlWlpSsepWvh1RPZbr3JVi1SPLObSUYlkri1g7ZpZDGau6zGI3PJWxjKHV+3gqv6NSsXxX8KkqoxWrXFq98R7rkaYVq6jVaxWMpScWK6vVPW9rqKnF2r5e71e6G6G5+vRifZ9zjHFwyZDM9acYayx7PHEOeWIZ4pI5ViGxatW16/UFYlUfsy/HiFUx7iC3oxCrZDx73oc8sQrRarUNeWLlrKepx5AnVqbZaq0lHytmd3/tVu8jqccK2VuMjfA65NVjLdf3mBvhKYjHStuaWTU2wkst6Vj71+64MBiTjXV+7cL2dmK1XJdS+W9i5bI2qfoJsYpXy1rDEa8aq7ymitYPibWqr6nWIT+spRjL+sJNbYmCsexR3n5FOpYdYmZL1IvVmkxrif6WKBerPcXHW6JarN7SGW6JYrH6Q2m0JYrF6rYabolasQatRluiVKzJG5rmXFOKNXhyvOpuiUKxJh4rLP0tUSfW3JPj7ddm1GNNtuptiTKxxsN9194SVWLNDPesifUBkVhzw33X2hI1Ys0O911jS9SI5WzVukuUiDU/3A/vj1XrUSHWjVb2/44JxPJshEWYl/GzJzpieYf7ztgSHx/rbitrS3x8rDsDa7MeJ+0UYn2K9i+zOT09Fn8ueNbCH6Ked3+utxGLWMQCAAAAAAAAAAAAAAAAAAAAAAD4//0BUyATTom0AxcAAAAASUVORK5CYII=";

const hotelSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuid(),
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    default: bannerImageUri,
  },
  location: [
    {
      name: { type: String, required: true },
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
      latitudeDelta: { type: Number, required: true },
      longitudeDelta: { type: Number, required: true },
    },
  ],
  priceRange: {
    type: String,
    required: true,
  },
  reating: {
    type: String,
    default: "0.00",
  },
  shourtDiscription: {
    type: String,
    required: true,
  },
  fullDiscription: {
    type: String,
    required: true,
  },
  amenities: [
    {
      tv: { type: Boolean, default: false },
      wifi: { type: Boolean, default: false },
      ac: { type: Boolean, default: false },
      freeParking: { type: Boolean, default: false },
    },
  ],
  roomDetals: { type: String, required: true },
  reviews: [String],
  rooms: [
    {
      image: { type: String, default: roomImage },
      price: { type: String, required: true },
      roomeType: { type: String },
    },
  ],
});

const Hotels = mongoose.model("Hotels", hotelSchema);
module.exports = Hotels;
