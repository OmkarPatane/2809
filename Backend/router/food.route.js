import {Router} from "express";
import { getdishes,addish,getdishbyid } from "../controller/food.control.js";
const foodRouter=Router();

foodRouter.get("/",getdishes);
foodRouter.post("/create",addish)
foodRouter.get("/dish/:id",getdishbyid)

export {foodRouter}