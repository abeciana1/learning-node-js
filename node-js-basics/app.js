const http = require('http');
const fs = require('fs');

// console.log(http)

const rqListener = (req, res) => { // req => request // res => response
    // console.log(req)
    // console.log(req.url, req.method, req.headers)
    // process.exit() //! Hard exit event loop for server
    const url = req.url
    const method = req.method
    if (url === "/") {
        res.write('<html>')
        res.write('<body>')
        res.write("<h2>Enter messages:</h2>")
        res.write('<form action="/message" method="POST" ><input name="message" type="text"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split("=")[1]
            console.log(message)
            fs.writeFileSync('message.txt', message)
        })
        res.writeHead(302, { 'Location': '/' })
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>hello</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
}

const server = http.createServer(rqListener)

//! listening on port 3000
server.listen(3000)