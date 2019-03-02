//Please update your database info here
var mysql = require("mysql")
var config = require("../config");

var connection
	connection = mysql.createConnection(config.mysqlConfig)
	connection.connect(function (err) {
		if(err){
			console.log('DB_ERROR_OCCURED: Please enable your database first')
		}
	})

module.exports = connection
