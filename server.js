const express=require('express')
require('dotenv').config()
const connectdb=require('./config/DBconnect')


const app=express()
connectdb()
app.use(express.json())
app.use('/contact',require('./routes/contact'))
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is running"))