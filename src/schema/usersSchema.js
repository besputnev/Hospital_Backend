const { Schema, model } = require("mongoose");

const usersScheme = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = User = model("usersScheme", usersScheme);
