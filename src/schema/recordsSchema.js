const { Schema, model } = require("mongoose");

const recordsScheme = new Schema({
  complaints: { type: String, required: true },
  doctor: { type: String, required: true },
  name: { type: String, required: true },
  userId: { type: String },
  date: { type: String },
});

module.exports = Record = model("recordsScheme", recordsScheme);
