const express=require('express')
const dbconnect = require('./config/bdconnect')
require('dotenv').config()
const cors = require("cors");
const app = express()
dbconnect()


app.get('/',(req,res)=>{
    res.send('hello')
})
// middelware
app.use(cors());
app.use(express.json())
app.use('/contact',require('./routes/contact'))
const port=process.env.PORT
app.listen(port,(err)=>err?console.log(err):console.log(`server is connected in ${port}`))