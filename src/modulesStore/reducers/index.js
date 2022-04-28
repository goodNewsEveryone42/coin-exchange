import {combineReducers} from "@reduxjs/toolkit";
import user from "./user";
import coins from "./coins";
import photo from "./photo";
import tableData from "./tableData";
import deal from "./deal";

export default combineReducers({user, coins, photo, tableData, deal});