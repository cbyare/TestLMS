
const mssql = require('mssql')
var  connection = require('../database/dbcon');


const pool = new mssql.ConnectionPool(connection);

exports.getbooks = async (req,res) => {

    
    try
    {
        await pool.connect();

    const result = await pool.request()
        .execute(`getBooks`);
    
        console.log(result)
    const books =  result.recordsets[0]



        res.json(books)
    }
    catch(error)
    {
      console.log(error.message)

    }

}


exports.createBook=(req,res)=>
{
    try
    {
        books.push(req.body)
  res.send(
    {
        message : "book is succesfull registered",
        data : req.body
    }
  )
        
    }catch(error)
    {
      console.log(error.message )
    }
}

