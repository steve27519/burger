var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysqlcreateConnection(process.env.JAWSDB_URL);
} else {

mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "steve27519",
  password: "Dirtyone1",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});


module.exports = connection;