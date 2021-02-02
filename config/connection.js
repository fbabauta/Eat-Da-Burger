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
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "burgers_db",
  });
};

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
