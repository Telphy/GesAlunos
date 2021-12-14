const express = require('express')
const connection = require('../dbconnection')
const tiposRoute = express.Router()

tiposRoute.get('/',(req, res) => {
    connection.query('SELECT * FROM tipos', (err,result) => {
      if(err)
        res.json('Ocorreu um problema na DB' )
          else {
            res.json(result)
          }
        })
  }) 

module.exports = tiposRoute