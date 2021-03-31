const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     console.log("Guten Tag")
//     next()  
// })

// app.use((req, res, next) => {
//     console.log("Guten Abend")
// })

app.get('/users', (req, res, next) => {
    console.log("Guten Abend")
    res.send("<h1>Users Page</h1>")
})

app.use('/', (req, res, next) => {
    console.log("Guten Tag")
    res.send("<h1>Home page here</h1>")
})

app.listen(3000)