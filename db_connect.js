const {MongoClient} = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


async function getData()
{
   let result = await client.connect();
   let res = result.db('rahul');
   let collection = res.collection('students');
   let response = await collection.find({}).toArray();
   console.log(response);
}

getData();