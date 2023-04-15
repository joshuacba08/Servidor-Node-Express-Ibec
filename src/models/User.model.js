const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
      default: "https://i.ibb.co/m0SnZVN/avatar-men.png",
    },
    role: {
      type: String,
      require: true,
      default: "USER_ROLE",
    },
  },
  { timestamps: true }
);

module.exports = model('User', UserSchema);