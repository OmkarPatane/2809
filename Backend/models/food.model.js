import {Schema,model} from "mongoose";
import { user } from "./user.model";

const dishSchema= new Schema({
dishname:{
    type:String,
    required:true,
},
ingredients:{
    type:Array
}
})