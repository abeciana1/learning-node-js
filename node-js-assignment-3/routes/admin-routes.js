const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require('../util/path')

router.get("/admin/add-user", (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
})

router.post("/user", (req, res) => {
    console.log(req.body)
    res.redirect("/")
})

// module.exports = router
exports.routes = router
exports.products = products