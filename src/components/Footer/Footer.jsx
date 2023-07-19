import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
  <div className={`${style.Footer} w-100  mt-5 `}>
  <h2 className='text-white pt-4'> Get the Frech Cart App</h2>
  <h2 className=' text-white h6  ms-2'> we will send you a link , open it in your phone to Download it  </h2>
  <input className='ms-2' type="text" name="email" id="email" placeholder='Email...' />
  <button className='btn btn-info ms-2'>Share App Link</button>
  <div className='Payment'>
   
  </div>
  </div>
    </>
  )
}
