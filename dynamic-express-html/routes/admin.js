const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

const products = []

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post("/product", (req, res, next) => {
  console.log(req.body.title);
  products.push({ title: req.body.title })
  console.log(products)
  res.redirect("/");
});

// module.exports = router

exports.routes = router
exports.products = products