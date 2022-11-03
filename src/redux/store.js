import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BooksSlice";

export const store = configureStore({reducer:{books:booksReducer}})