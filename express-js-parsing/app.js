const express = require('express')
const bodyParser = require('body-parser')
// console.log(express)

const app = express();
// console.log(app.use)

app.use(bodyParser.urlencoded({extended: false}))

app.use("/add-product", (req, res, next) => {
    // console.log("Another middleware");
    // res.send("<h1>Hello from Add Product</h1>");
    const addProductForm = `
    <form action="/product" method="POST" >
        <input type="text" name="add product" placeholder="Add Product" />
        <button type="submit">Add Product</button>
    </form>
    `
    res.send(addProductForm)
});

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    // console.log("Another middleware")
    res.send("<h1>Hello from Express</h1>")
});

//! listening on port 3000
app.listen(3000)