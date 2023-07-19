import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import style from './ProductDetails.module.css'
export default function ProductDetails() {


const [product, setproduct] = useState(null)
const [loading , setloading] = useState(false)
let param= useParams()

 async function Getdata (param){
  setloading(true)
  let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${param}`)
  console.log(data.data)
  setproduct(data.data)
  setloading(false)
 }

useEffect(()=>
{
Getdata(param.id)
},[])

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};



  return (
    <>
   <div className={`row ${style.ProductDetails}`}>
     {loading ? <div className='text-center'> <i className="  fa-3x fa-solid fa-cog fa-spin"></i></div>:<>
     
     <div className={`col-md-4 `}>
    
    <Slider {...settings}>
   {product?.images.map((img)=> <img src={img} alt='logo'/> )}
    </Slider> 
     
    </div>  
    <div className="col-md-8 py-5 ">
        <h3 className='h6 fw-bolder '>{product?.title}</h3>
        <span className='text-muted'>{product?.description}</span>
        <div className=' d-flex justify-content-between'>
          <span className='text-muted'>{product?.price}pln</span>
          <span className='me-4'><i className='  fas  fa-star rating-color '></i>
          {product?.ratingsQuantity}
          </span>
        </div>
        <button className=' btn w-100  bg-main text-white mb-1'>++Add Product</button>

   </div>
     
     
     
     </> }
    

    
    

   


   </div>
    </>
  )
}
