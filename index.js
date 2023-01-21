// let fs = require('fs');
// console.warn("hello world");
// fs.writeFileSync("./Nodejs_tutorial/hello.txt","hello world");

// console.log("->>",__dirname);

// let http = require('http');

// http.createServer((req,res)=>{

//     res.write("<h1>Hello, rahul this from server</h1>");
//     res.end();
// }


// ).listen(4600);

// function dataControl(req,res){
//     res.write("hello from server");
//     res.end();
// }

// http.createServer(dataControl).listen(4700);

// var color = require('colors');
// console.log("hello".blue);
// console.log("hello world");

let fs = require('fs');
let input = process.argv;
fs.writeFileSync(input[2],input[3]);