const mongoose = require("mongoose");

const Group = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    require: true,
  },
  fonts: [Object],
  count: Number,
});

module.exports = mongoose.model("Group", Group, "group");
