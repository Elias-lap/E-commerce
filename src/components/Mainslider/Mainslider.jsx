import React from 'react'
import Slider from "react-slick";
import imag1 from '../../assets/images/grocery-banner-2.jpeg'
import imag2 from '../../assets/images/grocery-banner.png'
import imag3 from '../../assets/images/slider-2.jpeg'
import imag4 from '../../assets/images/slider-image-1.jpeg'
import imag5 from '../../assets/images/slider-image-2.jpeg'
import imag6 from '../../assets/images/slider-image-3.jpeg'

export default function Mainslider() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className='mt-3'>
    { <Slider {...settings}>
        <div className='w-100'><img height='200px' className='w-100' src={imag1} alt="" /></div>
        <div className='w-100'><img height='200px' className='w-100' src={imag2} alt="" /></div>
        <div className='w-100'><img height='200px' className='w-100'src={imag3} alt="" /></div>
        <div className='w-100'><img height='200px' className='w-100' src={imag4} alt="" /></div>
        <div className='w-100'><img height='200px' className='w-100' src={imag5} alt="" /></div>
        <div className='w-100'><img  height='200px' className='w-100' src={imag6} alt="" /></div>
      </Slider>   }
    </div>
    </>
  )
}
