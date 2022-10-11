import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
// import BookReducer from "./reducer";

export const store=configureStore({reducer:loginSlice})