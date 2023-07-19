import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorySlider() {

  const [categories , setcategories] =useState([])

 async function GetDatacategories(){
let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
console.log(data.data)
setcategories(data.data)
}

useEffect (()=>{
  GetDatacategories()
},[])

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <>

<Slider {...settings}>
        {categories?.map((img ,index)=><div key={index} ><img  object-fit='contain' width='150px' height='150px' src={img.image} alt="" /></div>)}
      </Slider>  

     
    </>
  )
}
