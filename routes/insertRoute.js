const express = require('express')
const insertRoute = express.Router()

insertRoute.post('/', (req,res) => {
    console.log(req.body)
})

module.exports = insertRoute