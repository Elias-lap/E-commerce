import React, { useState } from 'react'
import {useFormik}  from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function Login({encodeToken}) {
  let navigate = useNavigate()
 
  const [ isloading , setisloading] = useState(false)
  const [ msgerror , setmsgerror] = useState('')
  let validationSchema = yup.object(
   {
    email:yup.string().required('email is required' ).email('anter valid email'),
    password:yup.string().required('password is required' ).matches(/^[A-Z][a-zA-Z0-9!@$#*^%*()_-]{3,16}$/i, ' password is not corect'),
    
  })

 async function HandelSumbit (values){
  setisloading (true)
     let{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).catch((error)=>{
      console.log(error)
      setmsgerror(`${error.response.data.message}`)
      setisloading(false)
      
      
 })
      if(data.message === 'success'){
        localStorage.setItem('userToken' , data.token)
        encodeToken()
        setisloading (false)
        console.log(data)
        navigate ('/')
      }
     
   }


 
 let formik = useFormik({
  initialValues :{
    
    email:"",
    password:"",
   
  },
  validationSchema,
  onSubmit:HandelSumbit 
  
 });


  return (
    <>
       <div className=' w-75 m-auto'>
      <h2 className=' text-center'> Login Form</h2>
      {msgerror.length > 0 ? <div className='alert alert-danger'>{msgerror}</div> : null}
      <form onSubmit={formik.handleSubmit} className='my-4'>
     
        <label htmlFor="email">Email :</label>
        <input  onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="email" value={formik.values.email} id='email'  className=' form-control my-2' name='email'/>
         {formik.errors.email  && formik.touched.email ? <div className=' alert alert-danger'>{ formik.errors.email}</div> :null} 
        <label htmlFor="password">password :</label>
        <input  onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password" value={formik.values.password}id='password'  className=' form-control my-2' name='password'/>
         {formik.errors.password && formik.touched.password ? <div className=' alert alert-danger'>{ formik.errors.password}</div> :null} 
        
         {isloading ?<button className='text-white btn bg-main my-2' type="button">  <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i></button> :
         <button disabled = {!(formik.isValid && formik.dirty)} className='text-white btn bg-main my-2' type="submit"> sumbit</button>}
        
         

      </form>
    </div>
    </>
  )
}
