const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE PRODUCT
router.post("/", async (req, res) => {
  try {
    const { name, price, image } = req.body;

    const product = new Product({
      name,
      price,
      image
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
