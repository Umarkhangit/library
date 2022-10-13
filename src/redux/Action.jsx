export const Books=(data) =>{
    return{
        type:"showBooks",
        data:data
    }
}

export const pending=(data) =>{
    return{
        type:"showPending",
        data:data
    }
}