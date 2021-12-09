const express = require('express')
const Connection = require('./dbconnection')
const path = require('path')
const app = express()
 
app.use(express.static('./public'))

 app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, './public/index.html'))
}) 

app.get('/navbar',(req, res) => {
  res.sendFile(path.join(_dirname, './public/navbar.html'))
}) 

app.get('/tipos',(req, res) => {
  Connection.query('SELECT * FROM tipos', (err,result) => {
    if(err)
      res.json('Ocorreu um problema na DB' )
        else {
          res.json(result)
        }
      })
}) 

const port = 3000;

app.listen(port, function (){
console.log("Lisenning on port: " + port)
})