const express = require('express')
const Router = express.Router()

Router.get('/', function(req, res){
    return res.render("index")
})

Router.get('/study', function(req, res){
    return res.render("study")
})

module.exports = Router