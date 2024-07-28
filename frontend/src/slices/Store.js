import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import AuthReducer from './Auth.slice'

const rootReducer=combineReducers({
    [userSlice.reducerPath]:userSlice.reducer,
    auth:AuthReducer
})

const store =configureStore({
   
    reducer:rootReducer,
    middleware:(getDefaultMidleware)=>
        getDefaultMidleware().concat(
      
        )
})


export default store