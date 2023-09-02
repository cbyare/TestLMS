const express =  require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/api/books',require('../src/routes/Books/book'))

app.listen(3000,() =>{
  console.log('labarary application is listering port 3000')
})