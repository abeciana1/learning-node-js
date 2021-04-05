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

app.use((req, res, next) => {
	res.status(404).send('<h1>Page not found</h1>)
}

//! listening on port 3000
app.listen(3000)