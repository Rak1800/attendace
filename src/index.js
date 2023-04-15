const express= require("express");
const mongoose= require('mongoose');
const route=require("./routes/route")
const cors=require("cors")
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/attendace",
{useNewUrlParser:true})
.then(()=>{console.log("mongodb is connected")})
.catch(err=>{console.log(err)})

app.use('/',route)

app.listen(3001, function(){
    console.log("express is running on " +(3001))
})
