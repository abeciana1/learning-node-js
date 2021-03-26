const fs = require('fs');

const rqListener = (req, res) => { // req => request // res => response
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
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split("=")[1]
            console.log(message)
            fs.writeFile('message.txt', message, (err) => {
                res.writeHead(302, { 'Location': '/' })
                return res.end()
            })
        })
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>hello</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
}

//! short cut supported by NodeJS

exports.someText = "testing testing"
exports.rqListener = rqListener

//! alternative ways to do exports

// module.exports = rqListener //* use if you're only exporting 1 thing

// module.exports = { //* way to do multiple exports
//     rqListener: rqListener,
//     someText: 'testing testing'
// }

// module.exports.handler = rqListener
// module.exports.someText = "testing testing"