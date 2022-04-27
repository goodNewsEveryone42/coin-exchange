import {combineReducers} from "@reduxjs/toolkit";
import user from "./user";
import coins from "./coins";
import photo from "./photo";

export default combineReducers({user, coins, photo});