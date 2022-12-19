import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAsyncBooks = createAsyncThunk(
    "books/fetchAsyncBooks",
    async () => {
        const response = await axios.get("http://localhost:3001/books");
        return response.data;
        
    }
);

export const fetchAsyncBorrow = createAsyncThunk(
    "books/fetchAsyncBorrow",
    async () => {
        const response = await axios.get("http://localhost:3001/borrowed");
        return response.data;
        
    }
);



const initialState = {
    books : {},
    borrowed : {},

}

const booksReducer = createSlice({
    name : "book",
    initialState,
    reducers :{
        addBook : (state, {payload}) => {
            axios.post("http://localhost:3001/books",payload)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err)) 
        } ,

        addUser : (state, {payload}) => {
            axios.post("http://localhost:3001/user",payload)
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))    
        }
    } , 
    extraReducers: {
        [fetchAsyncBooks.pending] : () => {
            console.log("Pending Books!");
        },
        [fetchAsyncBooks.fulfilled] : (state, {payload}) => {
            console.log("Success....... Books", payload);
            
            return {...state, books : payload};
        },
        [fetchAsyncBooks.rejected] : () => {
            console.log("Rejected!, Books")
        },
        [fetchAsyncBorrow.pending] : () => {
            console.log("Pending!, Borrowed");
        },
        [fetchAsyncBorrow.fulfilled] : (state, {payload}) => {
            console.log("Success......., Borrowed", payload);
            
            return {...state, borrowed : payload};
        },
        [fetchAsyncBorrow.rejected] : () => {
            console.log("Rejected!, Borrowed")
        },
    },
});


export const getAllBooks = (state) => state.books.books;
export const getAllBorrowed = (state) => state.books.borrowed;
export const {addBook, addUser} = booksReducer.actions
export default booksReducer.reducer;