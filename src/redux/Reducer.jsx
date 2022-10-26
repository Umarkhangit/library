
var initialState;

const BookReducer = (state=initialState,action) =>{
    console.log(action.data);
    switch(action.type){
        case "allBooks":
            return state=action.data
    }
}

export default BookReducer