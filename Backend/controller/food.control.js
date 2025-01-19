import { dishes,calories } from "../models/food.model.js";
import qrcode from "qrcode"
export const getdishes=async (req, res) => {
    try {
      const getdish = await dishes.find(); 
      res.status(200).json(getdish); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching recipes' });
    }
}

export const getdishbyid= async (req,res)=>{
  const id=req.params.id;
  if(!id){
    return res.status(400).json({message:"Id of dish not provided"})
  }
  try{
    const dishid= await dishes.findById(id);
    if(!dishid){
    return res.status(400).json({message:"You can create this dish"})
    }
    res.status(200).json(dishid)
  }catch(err){
    res.status(500).json({message:"Interval server error"})
  }
  
}

export const addish=async (req,res)=>{
  const {dishname,items }=req.body;
  if(!dishname || !ingredients){
    return res.status(400).json({message:"Bad request"})
  }
  try{
    const newdish={
      dishname,
      items
    }
    await dishes.create(newdish)
    res.status(201).json({message:"Dish created successfully"})
  }catch(err){
    res.status(500).json({message:"Internal server error"})
  }
}
export const  updatedish=async (req,res)=>{

}


