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

// let fs = require('fs');
// let input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("Invalid Input");
// }

// const fs =require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'Files');
// // for(i=1;i<=4;i++)
// // fs.writeFileSync(dirpath+"/appled"+i+".txt" ,"test successfull");

// fs.readdir(dirpath,(err,Files)=>{
//     Files.foreach((item)=>{
//         console.log(item);
//     })
// })

// console.log("starting");
// setTimeout(()=>{
//     console.log("logic");
// },2000);
// console.log("complete");

const exp = require('express');
const path = require('path');

const app = exp();
const dirPath = path.join(__dirname,'public');

app.use(exp.static(dirPath));

app.listen(5000);
