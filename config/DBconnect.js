const mongoose=require('mongoose')

const dbconnect=async()=>{
    try {
       await mongoose.connect(process.env.URLDB)
       console.log("database is connected")
        
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbconnect