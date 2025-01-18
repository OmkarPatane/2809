import {Router} from "express";
import { getdishes,addish,getcalories } from "../controller/food.control.js";
const foodRouter=Router();

foodRouter.get("/",getdishes);
foodRouter.post("/create",addish)
foodRouter.get("/calorie",getcalories)

export {foodRouter}