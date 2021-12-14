const express = require('express')
const app = express()
 
app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: false}));

//rotas para os pedidos
app.use('/',require('./routes/mainRoute.js'))
app.use('/navbar',require('./routes/navbarRoute.js'))
app.use('/tipos',require('./routes/tiposRoute.js'))
app.use('/insert',require('./routes/insertRoute.js'))


const port = 3000;

app.listen(port, function (){
console.log("Lisenning on port: " + port)
})