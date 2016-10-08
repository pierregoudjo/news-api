var mysql = require('mysql');
var winston = require('winston');
var server = require('./app/server.js');
const ENV = require('./env.js');

const MYSQL_DSN = ENV.MYSQL_DSN;

console.log(ENV.PORT);

// winston.handleExceptions(new winston.transports.Console({ colorize: true, json: true }));

// const connection = mysql.createConnection(MYSQL_DSN);

// connection.connect(function (err) {
//     if (err) {
//         winston.info("Can't access the mysql database.");
//         winston.error(err.stack);
//     } else {    
//         server(connection, winston).listen(ENV.PORT);
//     }
// });