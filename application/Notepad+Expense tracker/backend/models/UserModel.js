const mongoose = require("mongoose");


/**
 * Schema for the User Model
 * this includes how the user is stored in the database
 */
const usrSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", usrSchema);

module.exports = {
  UserModel,
};
