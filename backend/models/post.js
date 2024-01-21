const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  locationType: {
    type: String,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  location: {
    type: String,
  },
  comments: {
    type: Array,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("post", PostSchema);
