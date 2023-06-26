const auth = (state='',action) => {
    switch(action.type){
        case "Set_token":
            return action.payload
        default:
            return state
    }
}

export default auth