import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterSlice";
import{ProductReducer} from './ProductSlice'
 export  let store = configureStore({
    reducer:{
        Counter :CounterReducer,
        product :ProductReducer
    }
})
