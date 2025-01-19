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
        },
        calories:{
            type:Number
        }
    }
    
]
})

const dishes=model("dish",dishSchema)

const calorieSchema=new Schema({
    dish:{
        type:Schema.Types.ObjectId,
        ref:dishes
    },
    quantity:{
        type:String,
        enum:["1 pc","1 serving"]
    },
    calorie:Number

})
const calories=model("calorie",calorieSchema)
export {dishes,calories}