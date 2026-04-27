const express = require('express');
const connectdb = require('./config/db');

require('dotenv').config();
const port = process.env.PORT || 3000;

const server = express();

connectdb();
server.get("/",(req,res)=>{
  res.send("hello gymbros");
})


server.listen(port,()=>{
  console.log(`server is running at ${port}`);
})