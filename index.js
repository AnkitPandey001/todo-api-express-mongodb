const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log("server started")
})

app.use(express.json());

const todoRoutes = require('./routes/todo');

app.use("/api/v1",todoRoutes);


const dbConnect = require('./config/database');

dbConnect();

app.get('/',(req,res)=>{
    res.send("<h1>This is Home pages</h1>")
})