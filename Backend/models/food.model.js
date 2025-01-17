import {Schema,model} from "mongoose";
import { user } from "./user.model";

const dishSchema= new Schema({
dishname:{
    type:String,
    required:true,
},
ingredients:{
    type:[
        {
            name:{
                type:String,
                required:true
            },
            Quantity:Number
        }
    ]
},
QRcode:{
    type:String,
    required:true
},
image:{
  type:String,
  required:true
}
})