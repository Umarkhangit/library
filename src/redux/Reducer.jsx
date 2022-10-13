const initial=null;

 const BookReducer= (state=initial,action)=>{
    
    switch(action.type){
        case "showBooks":
            state=action.data
            console.log(state.length)
            return state
        case "showPending":
           
            
                // console.log(b);
            // return state = b
        default:
            return state
    }
}

// export const PendingReducer= (state=initial,action)=>{
    
//     switch(action.type){
//         case "showPending":
//             state=action.data
//             console.log(state.length)
//             return state

//         default:
//             return state
//     }
// }

export default BookReducer
