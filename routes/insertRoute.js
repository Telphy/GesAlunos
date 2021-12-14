const express = require('express')
const insertRoute = express.Router()
const connection = require('../dbconnection')

insertRoute.post('/', (req,res) => {
    const sql= 'INSERT INTO Utilizadores(nomeutilizador, moradarua, moradanumero, datanascimento,telemovel,email,tipo) VALUES(?,?,?,?,?,?,?)'
    connection.query(sql,
        [req.body.nomeutilizador,
        req.body.moradarua,
        req.body.moradanumero,
        req.body.datanascimento,
        req.body.telemovel,
        req.body.email,
        req.body.tipo],
        (err,result)=>{
            if(err){
                console.log(err)
                res.send('Ocorreu um erro na base de dados')
            }
            else{
                res.send('Utilizador inserido com sucesso')
            }

        })
})

module.exports = insertRoute