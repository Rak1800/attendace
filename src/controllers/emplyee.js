
const employeeSchema = require("../models/employeeSchema")


const employee= async function(req,res){

    const data= req.body
    const {name,gender,phone}=data

    if(!name) return res.status(400).send({status:false, message:"name is required"})
    if(!gender) return res.status(400).send({status:false, message:"gender is required"})
    if(!phone) return res.status(400).send({status:false, message:"phone is required"})
   

    const saveData= await employeeSchema.create(data);
   return res.status(201).send({status:true,message:"register Succussful ", saveData})
}



module.exports={employee}