const express = require('express')
const bodyParser = require('body-parser')
// console.log(express)

const app = express();
// console.log(app.use)

const adminRoutes = require('./routes/admin')
const shopRouters = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(shopRouters)

//! listening on port 3000
app.listen(3000)