const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema(
  {
    description: { type: String, require: true },
    date: { type: Date, required: true },
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const ToDo = mongoose.model("ToDo", todoSchema);
module.exports = ToDo;
