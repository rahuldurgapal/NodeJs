// const http = require('http');
// const data=require('./data');
// http.createServer((req,res)=>{

//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4500);


const exp = require('express');
const app = exp();

app.get('',(req,res)=>{
    console.log("data is sent by browser "+req.query.name);
    res.send("Hello this is "+req.query.name);
});
app.get('/about',(req,res)=>{
    res.send("This is About Page");
});

app.get('/ContactUs',(req,res)=>{
    res.send("This is Contact us Page");
});

app.listen(5000);