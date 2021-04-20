const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// console.log(express)

// console.log(app.use)

const adminData = require('./routes/admin')
const shopRouters = require('./routes/shop')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use(adminData.routes)
app.use(shopRouters)

app.use((req, res, next) => {
	// res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
	res.status(404).render('404', {pageTitle: 'Page Not Found!'})
})

//! listening on port 3000
app.listen(3000)