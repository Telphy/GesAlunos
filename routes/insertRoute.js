const express = require('express')
const path = require('path')
const insertRoute = express.Router()

insertRoute.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/insert.html'))
  }) 

module.exports = insertRoute