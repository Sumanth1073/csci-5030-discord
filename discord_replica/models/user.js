const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requires: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

mongoose.model("User", userSchema);
