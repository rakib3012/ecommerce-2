import { combineReducers   } from "redux";
import  {cartReducer} from "./reducers/cart"
import { configureStore } from "@reduxjs/toolkit";



const rootReducer = combineReducers({
    cart : cartReducer
})
 


// export const store = createStore(rootReducer);
export const store = configureStore( {reducer:rootReducer})