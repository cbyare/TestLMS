const express = require('express')

const routes = express.Router()
const books = []

routes.get('/',(req,res)=>
{
  res.send({ 
      data: books
  })
})


routes.post('/register',(req,res)=>
{
//   const {bookname,author,date_published} = req.body
   
  books.push(req.body)
  res.send(
    {
        message : "book is succesfull registered",
        data : req.body
    }
  )


})

module.exports =routes