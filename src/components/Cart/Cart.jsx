import React, { useContext, useEffect, useState } from 'react'
import { CartContext} from '../../Context/CartContext'
import { Link } from 'react-router-dom'
export default function Cart() {
const [loading , setloading] = useState(false)
 const [ cartdetails , setcartdetails] = useState(null)
 let {getloogedCart ,removeCart ,abdateCart} = useContext(CartContext)

async function getCart (){
  setloading(true)
let response=  await getloogedCart()

if(response.data.status==='success'){
  setcartdetails(response?.data?.data)
}
setloading(false)
}
async function DeleteCart(productId){
  let response=  await removeCart(productId)
  setcartdetails(response?.data?.data)
 
 }
async  function AbdateCart(productId,count){
 let response= await abdateCart(productId ,count)
 setcartdetails(response?.data?.data)
}

useEffect(()=>{
  getCart()
},[])
  return (
    <>
     {loading ? <div className='text-center'> <i className="  fa-3x fa-solid fa-cog fa-spin"></i></div> : <> 
     
     
     {cartdetails !== null ? 
      <div className=' bg-secondary-subtle  mt-3 py-4 '>
      <h2 className='px-2'>Total Price :
        <span className='text-main'>{cartdetails?.totalCartPrice} pln</span> 
       </h2>
   
      </div>:null}
      {cartdetails?.products?.map((product)=><div key={product.product._id} className='row border-bottom py-2 align-items-center'>
        <div className="col-md-3 mb-2">
          <img className='w-100' src= {product.product.imageCover} alt="" />
        </div>
        <div className="col-md-9 d-flex justify-content-between ">
        <div>
        <h6  className=''>{product.product.title}</h6>
           <h6 className=''> price :<span className='text-main'>{product.price}</span></h6>
           <button onClick={()=>DeleteCart(product.product._id)} className='btn btn-secondary'><i className="fa-solid fa-trash"></i> remove</button>
        </div>
         
         <div>
          <button  onClick={()=>AbdateCart(product.product._id ,product.count +1)}  className=' btn btn-primary '>+</button>
          <span className='mx-3'>{product.count}</span>
          <button onClick={()=>AbdateCart(product.product._id ,product.count -1)}  className=' btn btn-danger '>-</button>
         </div>
        </div>
      </div>)}
      <Link to={'/Chekout'}>
  <button className=' mt-3 btn btn-primary'>
    Chekout</button>
    </Link>


 
     
     </>}
    
   



    </>
  )
}
