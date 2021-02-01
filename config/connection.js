// Set up MySQL connection
const mysql = require("mysql");

// import login information from .env file
// require('dotenv').config({ path: '../.env' });
require('dotenv').config();

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "ltd5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rxoiqel7wsnjdk8uc",
    password: "gq4pm3tqs2owunzu",
    database: "burgers_db"
  });
}

// Make mysql connection
connection.connect(function (err) {
  
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;
