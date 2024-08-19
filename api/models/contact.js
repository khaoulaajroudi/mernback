const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactschema= new schema ({
name:{
    type:String,
    required:true
},
photo:{
    type:String,
    default:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png'
},
phone:{
    type:Number,
    required:true
}
})

module.exports = contact =mongoose.model("Contact",contactschema)