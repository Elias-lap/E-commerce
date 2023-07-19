import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState ={ product :[] , isLoading:false}


export let getProducts = createAsyncThunk('product/getProducts' ,async ()=>  {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    return data.data
 })


 let ProductSlice = createSlice({
    name: "Product",
    initialState ,
    reducers:{ 
        increase : (state , action)=>
        state.counter+=1

    },
    extraReducers :(biuder)=>{
        biuder.addCase('fullfiled' , (state , action)=>{
            state.product=action.payload
        })
            
        

    }
})
export let ProductReducer = ProductSlice.reducer 
export  let {increase} =ProductSlice.actions