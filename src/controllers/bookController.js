
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


exports.createBook= async(req,res)=>
{
    try
    {
        const{bookname,date_published}=req.body
        await pool.connect();

        const result = await pool.request()
            .input('BookName',bookname)
            .input('DatePublished',date_published)
            .execute(`createBook`);

        console.log(result.rowsAffected[0])
        if(result.rowsAffected[0]!=1) res.send({message : "book can not be registered !"})

        
  res.send(
    {
        message : "book is succesfull registered",
        data : {bookname :bookname,date_published:date_published}
    }
  )
        
    }catch(error)
    {
      console.log(error.message )
    }
}

