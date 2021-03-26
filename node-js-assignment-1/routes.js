const reqListener = (req, res) => {
    const url = req.url
    const method = req.method
    const users = []

    if (url === "/") {
        const homePage = `
        <h1>Welcome to my Node.js App</h1>
        <br />
        <br />
        <form action="/create-user" method="POST">
            <label>Create a Username</label>
            <input type="text" name="username">
            <button type="submit">Submit</button>
        </form>`

        res.setHeader('Content-Type', 'text/html')
        res.write(homePage)
        return res.end()
    } else if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', chunk => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const username = parsedBody.split("=")[1]
            console.log(username)
            users.push(username)
            res.writeHead(302, { 'Location': '/users' })
            return res.end()
        })
    } else if (url === '/users') {
        const usersList = `
        <h1>List of Users</h1>
        <br/>
        <br/>`
        // ${users.map(user => <li>{user}</li>)}
        res.setHeader('Content-Type', 'text/html')
        res.write(usersList)
        return res.end()
    }
}

exports.reqListener = reqListener