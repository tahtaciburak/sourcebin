//Please update your database info here
var mysql = require("mysql")
var db_config = {
	host	: 'localhost',
	user	: 'root',
	password: '',
    database: 'sourcebin'
}

var connection
	connection = mysql.createConnection(db_config)
	connection.connect(function (err) {
		if(err){
			console.log('DB_ERROR_OCCURED: Please enable your database first')
		}
	})

module.exports = connection
