import axios from 'axios'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import { Helmet } from "react-helmet";
export default function Categories() {
const [categoreis , setcategoreis] = useState([])
const [loading , setloading] = useState(false)
async function GetData (){
  
  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  setloading(true)
  setcategoreis(data.data)
  console.log(categoreis)
  setloading(false)
 }


useEffect(()=>{
  GetData()
},[])




  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
    {loading === true ?<div className='text-center'> <i className="  fa-3x fa-solid fa-cog fa-spin"></i></div> :<>
        <div className= {`${style.Categories} row`}>
        {categoreis?.map((item )=>
        <div className='col-md-3 g-3' key={item._id}>
         <Link to={`CategoreisDetails/${item._id}`}>
         <img height={'200px'} className='w-100 ' src={item.image} alt="" />
         <span className='h6 '>{item.name}</span>
         </Link>
        </div>
        
       )}
        
     </div> </>}

    </>
  )
}
