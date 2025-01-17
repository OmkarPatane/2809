import {model,Schema} from "mongoose";

const userschema=new Schema({
    name:{
     type:String,
     required:true
    },
    username:{
        type:String,
        required:true,
        minlength:3,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    confirmPassword:{
        type:String,
        minlength:6
    },
    
})

const user= model("user",userschema)

export {user}