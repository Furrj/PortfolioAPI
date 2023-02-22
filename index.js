const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://FraterSKS:4FZEcEToLPJhw1WS@cluster0.vapkzx3.mongodb.net/mydev?retryWrites=true&w=majority"
);
require("./message");
const Message = mongoose.model("Message");

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { email, message } = req.body;
  const newMessage = new Message({
    email: email,
    message: message,
  });
  await newMessage.save();
  res.json("Recieved");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
