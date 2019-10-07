// build your database
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "forest",
  password: "",
  database: "mockta"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;