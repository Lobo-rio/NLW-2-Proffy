const express = require('express')
const nunjucks = require('nunjucks')
const Router = require('../app/router/index')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(Router)

server.set('view engine','njk')

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(3000, function() {
    console.log('Server running at port 3000!')
})