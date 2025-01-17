import { user } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import argon2 from "argon2";

const register=async (req, res)=>{
    const {Name,Username,Email,Password}=req.body;
    if(!Username||!Password||!Name||!Email){
        return res.status(400).json({msg:"Bad request"})
    }
    
    try{
        const hashedpassword=await argon2.hash(Password);
        const newuser={
            name:Name,
            username:Username,
            email:Email,
            password:hashedpassword,
        }  
      await user.create(newuser)
      res.status(201).json({msg:"Account created successfully",
        user:newuser
      })
    }catch(err){
      res.status(500).json({msg:"Internal server error",
        error:err.message
      })
    }
}

const login=async(req,res)=>{
    const {Username,Password}=req.body;
    if(!Username ||!Password){
        return res.status(400).json({msg:"Bad request"})
    }
    const userdata=await user.findOne({username:Username});
    if(!userdata){
        return res.status(400).json({msg:"wrong username or password"})
    }
    try{
       const iscorrectuser=await argon2.verify(userdata.password,Password);
       if(iscorrectuser){
        const token= jwt.sign(
            {
              id:userdata._id,
              name:userdata.name
            },secretkey)
        return res.status(200).json({msg:"login successful",
            token:token
        })
       }else{
        
        return res.status(400).json({msg:"wrong username and password"})
       }
      
    }catch(err){
        return res.status(500).json({msg:"Internal server error",
            error:err.message
        })
    }
}
export{register,login}