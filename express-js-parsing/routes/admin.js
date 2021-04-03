const express = require('express')

const router = express.Router()


router.get("/add-product", (req, res, next) => {
  // console.log("Another middleware");
  // res.send("<h1>Hello from Add Product</h1>");
  const addProductForm = `
    <form action="/product" method="POST" >
        <input type="text" name="add product" placeholder="Add Product" />
        <button type="submit">Add Product</button>
    </form>
    `;
  res.send(addProductForm);
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router