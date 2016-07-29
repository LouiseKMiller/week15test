// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "",
        database: "starwars"
    },
    jawsDB: {
        port: 3306,
        host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vl75p1f07mzo4oob',
        password: "zl93s1vyb3801cdg",
        database: "y95bk8qprm5a8jla"
        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection(source.jawsDB); //enter connection here);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;