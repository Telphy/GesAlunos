const express = require('express')
const path = require('path')
const app = express()
 
app.use(express.static('./public'))

 app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, './public/index.html'))
}) 

app.get('/navbar',(req, res) => {
  res.sendFile(path.join(_dirname, './public/navbar.html'))
}) 



 

const port = 3000;

app.listen(port, function (){
console.log("Lisenning on port: " + port)
})