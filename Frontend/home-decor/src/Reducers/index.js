import {combineReducers} from "redux"     
import auth from "./auth"
import cartReducer from "./cart"

const allReducer = combineReducers({             
    auth: auth,
    cart: cartReducer                            
})

export default allReducer