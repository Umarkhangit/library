import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./Reducer";

export const store = configureStore({reducer:BookReducer})