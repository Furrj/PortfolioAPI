const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  email: String,
  message: String,
});

mongoose.model("Message", messageSchema);
