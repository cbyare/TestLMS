const express =  require('express')
const bodyParser = require('body-parser')
require('dotenv').config();


const path =  require('path')
const app = express()
app.set("view engine", "pug");
app.use(bodyParser.json())
app.use('/api/books',require('../src/routes/Books/book'))

app.get('/',(req,res)=>
{

  // api call
  
  data =  [
    {
      bookname : "Book 1",
      author: "Abdirahman",
      datapublished : "20-09-2024"
    },


    {
      bookname : "Book 2",
      author: "Abdirahman",
      datapublished : "20-09-2024"
    },
    {
      bookname : "Book 3",
      author: "Abdirahman",
      datapublished : "20-09-2024"
    }
  ]
 


  res.render(path.join(__dirname+'/template/index'),{data})

})

app.listen(3000,() =>{
  console.log('labarary application is listering port 3000')
  console.log(process.env.DATABASE)
})