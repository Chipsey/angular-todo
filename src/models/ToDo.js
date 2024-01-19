const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;
