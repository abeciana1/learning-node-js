const http = require('http');
// const fs = require('fs');
const routes = require('./routes')

console.log(routes.someText)

const server = http.createServer(routes.rqListener)
console.log(server)
//! listening on port 3000
// server.listen(3000)