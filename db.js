const mysql = require('mysql')

const con = mysql.createConnection({
    host: "database-1.c8mgsiiz0jqv.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Parola1!",
    database: "anb"
});
con.connect(function(err) {
    if (err) throw err

});

module.exports = con;