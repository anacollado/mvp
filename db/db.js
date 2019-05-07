const mysql = require('mysql');

var con = mysql.createConnection({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'vanity',
  dateStrings: true
});

con.connect((err) => {
  if (err) {
    throw err;
   }
  console.log('Connected!')
});

module.exports = con;