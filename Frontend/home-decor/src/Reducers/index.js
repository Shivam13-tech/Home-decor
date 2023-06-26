import {combineReducers} from "redux"     
import auth from "./auth"

const allReducer = combineReducers({             
    auth: auth                            
})

export default allReducer