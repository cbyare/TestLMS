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



app.post('/send',(req,res)=>
{
  console.log(req.body)
  res.send({

    batchId: "e4e2e063-a31c-42b7-b6d0-a9837273bec6",
    messageCount: 6
  })
})
app.listen(3000,() =>{
  console.log('labarary application is listering port 3000')

})