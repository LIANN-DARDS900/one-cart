const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: "demo",
    },
    title: String,
    price: String,
    image: String,
    url: String,
    website: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);