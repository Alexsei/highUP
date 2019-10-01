const sql = require('mysql');


const db = (function() {
  const mysql = sql;
  const  host     = 'localhost';
  const  user     = 'me';
  const  password = 'secret';
  const  database = 'my_db';

  return {
    const connect: mysql.createConnection({
      host     : 'localhost',
      user     : 'me',
      password : 'secret',
      database : 'my_db'
    })

  }
}
module.exports = db
