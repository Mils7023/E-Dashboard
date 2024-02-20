const mongoose = require("mongoose");

const userScheema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("users", userScheema);
