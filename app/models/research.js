const mongoose=require('mongoose')

const researchSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    plag:{
        type: String, required: true
    },
    pages: { type: String, required: true },
    formatting: { type: String, required: true },
    submission: { type: String, required: true },
    price:{type:Number,required:true},
    completion_time: { type: String, required: true }
})

module.exports=mongoose.model("Research",researchSchema)