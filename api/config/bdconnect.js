const mongoose=require('mongoose')
const dbconnect=async()=>{
    try {
       await mongoose.connect(process.env.DBURL)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbconnect;