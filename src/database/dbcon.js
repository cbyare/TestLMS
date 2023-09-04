const  connection = {
    user:    process.env.DB_USER, 
    password:  process.env.DB_PWD, 
    server: process.env.DB_SERVER, 
    database: process.env.DATABASE,
    options: {
        encrypt: false,
        enableArithAbort: false
    },
  
  }
  
  module.exports = connection;
