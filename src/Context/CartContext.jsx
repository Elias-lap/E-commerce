import axios from "axios";
import {createContext, useEffect, useState } from "react";

export  let CartContext = createContext()
 export  function CartContextProvider (props){
  let headers = { token: localStorage.getItem('userToken') }

    function addCart (productId){
     return   axios.post(`https://ecommerce.routemisr.com/api/v1/cart` ,
         {productId :productId} , 
         {headers }).then((response)=>response)
         .catch((erroe)=>erroe)
         
    }
    function removeCart (productId){
     return   axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,  
         {headers:headers }).then((response)=>response)
         .catch((erroe)=>erroe)
         
    }
    function abdateCart (productId ,count){
     return   axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,  
         {count:count},{headers:headers}).then((response)=>response)
         .catch((erroe)=>erroe)
         
    }
    function PayOnline (productId ,shippingAddress){
     return   axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=http://localhost:3000` ,  
         {shippingAddress:shippingAddress},
         {headers:headers}).then((response)=>response)
         .catch((erroe)=>erroe)
         
    }

const [ cartId , setcartId] = useState(null)
const [ numOfCartItems , setnumOfCartItems] = useState(0)
     
   async function GetCart(){
        let response= await getloogedCart ();
        console.log(response)
        if(response?.data?.status === 'success'){
            setcartId (response.data.data._id)
            setnumOfCartItems (response.data.numOfCartItems)
            
        }
    }
    useEffect(()=>{
        GetCart()
      },[])
    function getloogedCart (){
     return   axios.get(`https://ecommerce.routemisr.com/api/v1/cart` ,
         {headers}).then((response)=>response)
         .catch((erroe)=>erroe)
         
    }






  return  <CartContext.Provider value={{setnumOfCartItems,  addCart ,getloogedCart ,removeCart ,abdateCart ,PayOnline ,cartId ,numOfCartItems }}>
        {props.children}
    </CartContext.Provider>
}