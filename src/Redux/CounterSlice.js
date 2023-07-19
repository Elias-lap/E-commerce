import { createSlice } from "@reduxjs/toolkit";
let x={counter :0 , username :''};
let CounterSlice = createSlice({
    name:'counter',
    initialState :x,
    reducers:{
        incrase :(state , action)=>{
         state.counter+=action.payload
        },
        Decrase :(state , action)=>{
         state.counter-=1
        }
    }
    
})
export let CounterReducer = CounterSlice.reducer
export let {incrase,Decrase}= CounterSlice.actions