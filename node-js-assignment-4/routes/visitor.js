const express = require('express')
const router = express.Router()

const adminData = require('./admin')

router.get("/", (req, res) => {
    const users = adminData.users
    console.log(users)
    res.render('home', {
        pageTitle: 'Home',
        users: users,
        path: '/'
    })
})

module.exports = router