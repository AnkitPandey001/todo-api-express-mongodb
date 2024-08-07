const mongoose = require('mongoose')

 require('dotenv').config();

function dbCoonect(){
   mongoose.connect(process.env.DATABASE_URl)
   .then(()=>{
    console.log("Database Connected")
   })
   .catch((err)=>{
    console.log(err,"Db Not connected")
   })
}

module.exports = dbCoonect;