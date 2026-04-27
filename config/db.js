const mongoose = require('mongoose');
require('dotenv').config();

const connectdb = async ()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  }catch(error){
    console.log("mongodb not connected",error)
    process.exit(1);

  }
}

module.exports = connectdb;