const http = require('http');
const routes = require('./routes')

const server = http.createServer(routes.reqListener)

server.listen(3000)