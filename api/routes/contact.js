const express=require('express')
const contact=require('../models/contact')
const contactrouter=express.Router()
// get all contact
contactrouter.get('/all',async(req,res)=>{
    try {
        const rest=await contact.find()
        res.send({voicilist:rest,msg:'voici la liste des contacts'})
    } catch (error) {
        console.log(error)
    }
})
// get contact by id
contactrouter.get("/:id",async(req,res)=>{
    try {
        const rest=await contact .findById({_id:req.params.id})
        res.send({resultat:rest,msg:'hahou il contact'})
    } catch (error) {
        console.log(error)
        
    }
})
// add new contact
contactrouter.post("/add", async (req, res) => {
    try {
        const newcontact= new contact (req.body)
        const rest=await newcontact.save()
        res.send({newuser:rest,msg:'new user is added'})
        
    } catch (error) {
        console.log(error)
        
    }
})
// delete contact
contactrouter.delete("/:id",async (req ,res )=>{
    try {
        const rest=await contact .findByIdAndDelete({_id:req.params.id})
        res.send({msg:'hahou il contact itfasa5'})
    } catch (error) {
        console.log(error)
        
    }
})
// update contact
contactrouter.put("/:id",async (req ,res )=>{
    try {
        const rest=await contact .findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({voici:rest,msg:'hahou il contact itbadel'})
    } catch (error) {
        console.log(error)
        
    }
})
module.exports=contactrouter

