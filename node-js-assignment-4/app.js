const express = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const visitorRoutes = require('./routes/visitor')

const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(adminData.routes)
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminData.routes)
app.use(visitorRoutes)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "Page not found!"})
})

app.listen(3000)