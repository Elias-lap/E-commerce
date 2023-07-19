import React from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CategorySlider from '../CategorySlider/CategorySlider'
import Mainslider from '../Mainslider/Mainslider'

export default function Home() {
  return (
    <>
    <Mainslider/>
    <CategorySlider/>
    <FeaturedProducts/>
    </>
  )
}
