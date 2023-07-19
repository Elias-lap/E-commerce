import axios from 'axios'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import { Helmet } from "react-helmet";
export default function Brands() {
const [Brands , setBrands] = useState([])
async function GetData (){
  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/Brands`)
  setBrands(data.data)
 }


useEffect(()=>{
  GetData()
},[])




  return (
    <>
          <Helmet>
        <title>Brands</title>
      </Helmet>
    <div className= {`${style.Categories} row`}>
       {Brands?.map((item)=>
       <div className='col-md-3 g-3' key={item._id}>
        <Link to={`BrandsDetails/${item._id}`}>
        <img height={'200px'} className='w-100 ' src={item.image} alt="" />
        <span className='h6 '>{item.name}</span>
        </Link>
       </div>
      )}
       
    </div>
    </>
  )
}
