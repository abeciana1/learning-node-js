const express = require('express')
console.log(express)

const app = express();
console.log(app.use)

app.use("/add-product", (req, res, next) => {
    console.log("Another middleware");
    res.send("<h1>Hello from Add Product</h1>");
});

app.use('/', (req, res, next) => {
    console.log("Another middleware")
    res.send("<h1>Hello from Express</h1>")
});

//! listening on port 3000
app.listen(3000)