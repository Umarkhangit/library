import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    userEmail : null,
    userPassword : null
};


const loginSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setActiveUser:(state,action)=>{
            state.userEmail = action.payload.userEmail
            state.userPassword = action.payload.userPassword
            return state
        },
        setLogOut:(state,action) => {
                state.userEmail = null
                state.userPassword = null
        }
    }
})

export const {setActiveUser}=loginSlice.actions;
export default loginSlice.reducer 