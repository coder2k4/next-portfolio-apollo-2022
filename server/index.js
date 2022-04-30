const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const hostname = 'localhost'

const app = next({dev, hostname, port})
const handle = app.getRequestHandler()

app.prepare().then(() => {

    const server = express()

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err =>{
        if(err) throw err
        console.log(`> Ready on http://${hostname}:${port}`)
    })

})