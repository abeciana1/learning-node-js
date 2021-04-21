const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

const products = []

router.get("/admin/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product', {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  })
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