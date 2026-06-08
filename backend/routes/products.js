const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await Product.create({
      userId: "demo",
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      url: req.body.url,
      website: req.body.website,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error saving product", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ userId: "demo" }).sort({
      createdAt: -1,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

module.exports = router;
