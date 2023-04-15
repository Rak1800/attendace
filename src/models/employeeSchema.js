const mongoose= require("mongoose");

const employeeSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
      type:String,
      required:true
    },
    phone:{
        type:String,
        required:true
    },
},{timestamps:true})


module.exports=mongoose.model("User",employeeSchema)