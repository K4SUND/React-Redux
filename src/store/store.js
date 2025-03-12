
import { thunk } from "redux-thunk";
import rootReducer from "../reducers";
// import { preload } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";

 
 

const middleware =()=>{
    return[
        thunk
    ]
};


const initialState = {};


const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: middleware,
  });


export default store;
