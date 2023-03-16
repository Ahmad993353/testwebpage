var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'mysql.cme5zhlvh69v.us-east-1.rds.amazonaws.com',
  user: 'admin', //
  password: 'admin1234', //
  database: 'mydatabase',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection
