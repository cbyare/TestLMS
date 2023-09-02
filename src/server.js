const express =  require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())

app.get('/books',(req,res)=>
{
  res.send({

    name : "Introduction to Nodejs",
    author : "mohamed abuukar ali",
    date : "30--8-2023"
  })
})

app.listen(3000,() =>{
  console.log('labarary application is listering port 3000')

})