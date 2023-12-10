const mongoose=require("mongoose")
const projectSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
        password:{
            type:String,
            required:true
        },
        
})

module.exports=mongoose.model("password",projectSchema)