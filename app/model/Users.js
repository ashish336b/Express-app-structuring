const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = new Schema(
  {
    f_name: { type: String, required: true }
  }
);

module.exports = mongoose.model("User", Users);
