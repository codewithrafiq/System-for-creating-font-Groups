const mongoose = require("mongoose");

const Font = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    require: true,
  },
  data: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Font", Font, "font");
