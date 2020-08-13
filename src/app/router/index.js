const express = require('express')
const Router = express.Router()

Router.get('/', function(req, res){
    return res.render("index")
})

Router.get('/study', function(req, res){
    return res.render("study")
})

Router.get('/give-classes', function(req, res){
    return res.render("give-classes")
})

module.exports = Router