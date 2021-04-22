const express = require('express')

const router = express.Router()

const users = []

router.get("/admin/add-user", (req, res) => {
    res.render('add-user', {
        pageTitle: "Add User",
        path: "/admin/add-user"
    })
})

router.post("/user", (req, res) => {
    console.log(req.body.user)
    users.push({ user: req.body.user })
    res.redirect("/")
})

exports.routes = router
exports.users = users