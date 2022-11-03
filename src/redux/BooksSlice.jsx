import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAsyncBooks = createAsyncThunk(
    "books/fetchAsyncBooks",
    async () => {
        const response = await axios.get("http://localhost:3001/books");
        return response.data;
        
    }
);


const initialState = {
    books : {}
}

const booksReducer = createSlice({
    name : "book",
    initialState,
    extraReducers: {
        [fetchAsyncBooks.pending] : () => {
            console.log("Pending!");
        },
        [fetchAsyncBooks.fulfilled] : (state, {payload}) => {
            console.log("Success.......", payload);
            
            return {...state, books : payload};
        },
        [fetchAsyncBooks.rejected] : () => {
            console.log("Rejected!")
        },
    },
});


export const getAllBooks = (state) => state.books.books;
export default booksReducer.reducer;