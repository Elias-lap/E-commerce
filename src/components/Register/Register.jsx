import React, { useState } from 'react'
import {useFormik}  from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function Register() {
  let navigate = useNavigate()
 
  const [ isloading , setisloading] = useState(false)
  const [ msgerror , setmsgerror] = useState('')
  let validationSchema = yup.object(
    {name:yup.string().required('Name is required' ).min(3, 'minimum is 3 ').max(20 , 'max is 20'),
    email:yup.string().required('email is required' ).email('anter valid email'),
    password:yup.string().required('password is required' ).matches(/^[A-Z][a-zA-Z0-9!@$#*^%*()_-]{3,16}$/i, ' password is not corect'),
    rePassword:yup.string().required('rePassword is required' ).oneOf([yup.ref('password')], 'rePasword must be matches'),
    phone:yup.string().required('Phone is required' ).matches(/^01[1052][0-9]{8}$/i , 'phone is not valid'),
  })

 async function HandelSumbit (values){
  setisloading (true)
     let{data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).catch((error)=>{
      console.log(error)
      setmsgerror(`${error.response.data.message}`)
      setisloading(false)
      
      
 })
      if(data.message === 'success'){
        setisloading (false)
        console.log(data)
        navigate ('/Login')
      }
     
   }


 
 let formik = useFormik({
  initialValues :{
    name: " ",
    email:" ",
    password:" ",
    rePassword:" ",
    phone:" "
  },
  validationSchema,
  onSubmit:HandelSumbit 
  
 });


  return (
    <>
       <div className=' w-75 m-auto'>
      <h2 className=' text-center'> Registration Form</h2>
      {msgerror.length > 0 ? <div className='alert alert-danger'>{msgerror}</div> : null}
      <form onSubmit={formik.handleSubmit} className='my-4'>
        <label htmlFor="name">Name :</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="name" value={formik.values.name} id='name'  className=' form-control my-2' name='name'/>
        {formik.errors.name && formik.touched.name ? <div className=' alert alert-danger'>{ formik.errors.name}</div> :null} 
        
        <label htmlFor="email">Email :</label>
        <input  onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="email" value={formik.values.email} id='email'  className=' form-control my-2' name='email'/>
         {formik.errors.email  && formik.touched.email ? <div className=' alert alert-danger'>{ formik.errors.email}</div> :null} 
        <label htmlFor="password">password :</label>
        <input  onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password" value={formik.values.password}id='password'  className=' form-control my-2' name='password'/>
         {formik.errors.password && formik.touched.password ? <div className=' alert alert-danger'>{ formik.errors.password}</div> :null} 
        <label htmlFor="rePassword">rePassword:</label>
        <input  onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password"  value={formik.values.rePassword} id='rePassword'  className=' form-control' name='rePassword'/>
         {formik.errors.rePasswor && formik.touched.rePassword ? <div className=' alert alert-danger'>{ formik.errors.rePassword}</div> :null} 
        <label htmlFor="Phone">Phone:</label>
        <input  onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="tel"value={formik.values.phone}id='phone'  className=' form-control' name='phone'/>
         {formik.errors.phone && formik.touched.phone  ? <div className=' alert alert-danger'>{ formik.errors.phone}</div> :null} 
         {isloading ?<button className='text-white btn bg-main my-2' type="button">  <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i></button> :
         <button disabled = {!(formik.isValid && formik.dirty)} className='text-white btn bg-main my-2' type="submit"> sumbit</button>}
        
         

      </form>
    </div>
    </>
  )
}
