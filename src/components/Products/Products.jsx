
import style from './Products.module.css'
import { Helmet } from "react-helmet";



import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'

export default function Product() {
  
 
  return (
    <>
      <Helmet>
        <title>Products</title>
        </Helmet>
        <div className={`${style.Product}`}>
        <FeaturedProducts/>
        </div>
    
   
   
    </>
  )
}
