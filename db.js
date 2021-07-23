var mysql = require('mysql2');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'vanov',
  password : 'Allheilvon11$',
  database : 'sekolah',
  multipleStatements : true
});

connection.connect((err) => {
	if(!!err) {
		console.log(err);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;