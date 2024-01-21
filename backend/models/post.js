const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  locationType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
  },
  likes: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("post", PostSchema);
