const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  image: {
    type: URL,
  },
  $home: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = post = mongoose.model("post", PostSchema);
