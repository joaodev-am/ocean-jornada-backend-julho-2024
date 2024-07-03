const express = require('express')
const app = express()

app.get("/", function (req, res) {
  res.send('Hello World')
})
app.get("/oi", function (req, res) {
  res.send('Olá, mundo!')
})
 
const lista = ['Luke Skywalker', 'Darth Vader', 'Princesa Leia']
app.get('/item', function (req,res){
  res.send(lista)
})
app.listen(3000)