
var mysql=require("mysql");

var connection=mysql.createConnection({

host:'localhost',
user:"root",
password:"",
database:"crud-opquast",
});


connection.connect(function(error){


});

module.exports=connection;



