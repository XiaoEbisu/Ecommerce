const Product = require("../models/Product");

const router = require("express").Router();

//GET ALL SIZE OF PRODUCTS
router.get("/size", async (req, res) => {
  try {
    let products;
    if (req.query.cat) {
      products = await Product.find({
        categories: { $in: [req.query.cat] },
      });
    } else {
      products = await Product.find();
    }
    let all_sizes = [];
    products.forEach((p) => {
      all_sizes.push(...p.size);
    });

    let sizes = [...new Set(all_sizes)];
    sizes.sort();
    res.status(200).json(sizes);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL COLOR OF PRODUCTS
router.get("/color", async (req, res) => {
  console.log("test");
  try {
    let products;
    if (req.query.cat) {
      products = await Product.find({
        categories: { $in: [req.query.cat] },
      });
    } else {
      products = await Product.find();
    }
    let all_colors = [];
    products.forEach((p) => {
      all_colors.push(...p.color);
    });

    let colors = [...new Set(all_colors)];
    colors.sort();
    res.status(200).json(colors);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL FILTER OF PRODUCTS
router.get("/", async (req, res) => {
  try {
    let products;
    if (req.query.cat) {
      products = await Product.find({
        categories: { $in: [req.query.cat] },
      });
    } else {
      products = await Product.find();
    }

    const sizes = getSizes(products);
    const colors = getColors(products);

    const filter = { sizes: sizes, colors: colors };

    res.status(200).json(filter);
  } catch (err) {
    res.status(500).json(err);
  }
});

const getSizes = (products) => {
  let all_sizes = [];
  products.forEach((p) => {
    all_sizes.push(...p.size);
  });
  let sizes = [...new Set(all_sizes)];
  sizes.sort();
  return sizes;
};

const getColors = (products) => {
  let all_colors = [];
  products.forEach((p) => {
    all_colors.push(...p.color);
  });
  let colors = [...new Set(all_colors)];
  colors.sort();
  return colors;
};

module.exports = router;
