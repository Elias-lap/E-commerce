import { useFormik } from 'formik'
import React, { useContext } from 'react'
import {CartContext} from '../../Context/CartContext'
import style from './Chekout.module.css'
export default function Chekout() {
  let {PayOnline ,cartId} = useContext(CartContext)



async function handelSumbit( values){
  let response= await PayOnline(cartId, values)
  if(response?.data?.status === 'success'){
    window.location.href =response.data.session.url
  }
 
}


 



let formik = useFormik({
  initialValues:{
    details :'',
    phone :'' ,
    city :'',
   
  },
  onSubmit :handelSumbit
})



  return (
    <>
    <div className={`w-50 ${style.formPay}`}>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="details">details :</label>
      <input type="text" className=' form-control ' onChange={formik.handleChange} value={formik.values.details}  name='details' id='details'/>
      <label htmlFor="phone">phone :</label>
      <input type="text" className=' form-control ' onChange={formik.handleChange} value={formik.values.phone}  name='phone' id='phone'/>
      <label htmlFor="city">city :</label>
      <input type="text" className=' form-control ' onChange={formik.handleChange} value={formik.values.city}  name='city' id='city'/>
      <button type='submit' className=' btn w-100 btn-warning'>Pay </button>
      </form>
    </div>
    </>
  )
}
