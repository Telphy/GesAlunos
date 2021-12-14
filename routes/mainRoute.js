const express = require('express')
const path = require('path')
const mainRoute = express.Router()

mainRoute.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'))
  }) 

module.exports = mainRoute