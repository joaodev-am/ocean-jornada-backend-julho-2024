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
app.use(express.json())

app.post('/item', function (req, res) {
  const item = req.body.nome

  lista.push(item)
  res.send('Item criado com sucesso!')
  
})

app.listen(3000)