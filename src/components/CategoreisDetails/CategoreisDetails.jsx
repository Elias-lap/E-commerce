import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './CategoreisDetails.module.css'
import { Helmet } from "react-helmet";
export default function CategoreisDetails() {
  let param =useParams()
  const [ CategoriesDetalis , setCategoriesDetalis] = useState([])
  const [loading , setloading] = useState(false)
async function GetData (param){
  let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${param}`)
  setloading(true)
  console.log(data)
  setCategoriesDetalis(data.data)
  setloading(false)
}
useEffect(()=>{
  GetData(param.id)
} )

  return (
    <>
         <Helmet>
        <title>CategoriesDetails</title>
        </Helmet>
    {loading ?<div className='text-center'> <i className="  fa-3x fa-solid fa-cog fa-spin"></i></div>
     : <> <div className={`${style.CategoreisDetails} text-center  w-75`}>
     <img className='w-100' src={CategoriesDetalis.image} alt="" />
     <span className='h2'>{CategoriesDetalis.name}</span>
    
   </div></>}
  
    </>
  )
}
