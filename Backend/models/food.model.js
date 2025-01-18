import {Schema,model} from "mongoose";
import { user } from "./user.model";

const dishSchema= new Schema({
dishname:{
    type:String,
    required:true,
},
items:[
    {
        name:{
        type:String,
        required:true
        },
        quantity:{
            type:String,
            default:"1 serving"
        }
    }
    
],
QRcode:String
})

const dishes=model("dish",dishSchema)

const calorieSchema=new Schema({
    itemname:String,
    quantity:{
        type:String,
        enum:["1 pc","1 serving"]
    },
    calorie:Number

})
const calories=model("calorie",calorieSchema)
export {dishes,calories}