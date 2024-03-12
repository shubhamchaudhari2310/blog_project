const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    Desc: {
      type: String,
      required: true,
    },
    Publish: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
