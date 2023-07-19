import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './BrandsDetails.module.css'
import { Helmet } from "react-helmet";
export default function BrandsDetails() {
  let param =useParams()
  const [ BrandsDetails , setBrandsDetails] = useState([])
  
async function GetData (param){
  let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/Brands/${param}`)
  setBrandsDetails(data.data)

}
useEffect(()=>{
  GetData(param.id)
} )

  return (
    <>
      <Helmet>
        <title>BrandsDetails</title>
        </Helmet>
      <div className={`${style.CategoreisDetails} text-center  w-75`}>
       <img className='w-100' src={BrandsDetails.image} alt="" />
       <span className='h2'>{BrandsDetails.name}</span>
     </div>
 
    </>
  )
}
