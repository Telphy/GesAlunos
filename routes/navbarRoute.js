const express = require('express')
const path = require('path')
const navbarRoute = express.Router()

navbarRoute.get('/',(req, res) => {
    res.sendFile(path.join(_dirname, '../public/navbar.html'))
  }) 

module.exports = navbarRoute