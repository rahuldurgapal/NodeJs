const mysql = require('mysql');

const connection = mysql.createConnection({

     host: "localhost",
     port: 3306,
     database: "test",
     user: "root",
     password: "",

});

connection.connect(function (err) {
    if(err){
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });