var mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: NO,
  database: 'chat'
});
dbConnection.connect();

    var tablename = "messages"; // TODO: fill this out

dbConnection.query('truncate ' + tablename, done);

module.exports = dbConnection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


