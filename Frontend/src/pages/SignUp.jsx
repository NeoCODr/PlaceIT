import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import grey_bg from '../assets/bggrey.png'
import { Router, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer, toast } from 'react-toastify'


const SignUp = () => {
  const navigate = useNavigate();

  const [register, setregister]= useState({email:"", f_name:"", password:""})

  const Onchangeinput = (event,key)=>{
    setregister({...register,[key]:event.target.value})
  }

  const handleClick =async()=>{
    if(register.email.trim().length===0|| register.f_name.trim().length===0||register.password.trim().length===0){
      console.log(register)
      return toast.error("Please fill all the credentials!")
    }
    await axios.post("http://localhost:4000/api/auth/register",register).then((res)=>{
      toast.success1("Sign Successful , You will be redirected to login page")
      setTimeout(() => {
        
        navigate("/signin")
        }, 4000);


        
    }).catch(err=>{
      console.log(err)
      toast.error(err?.response?.data?.error)
    })
  }


  return (
    <>
    <div className='relative flex min-h-screen justify-center items-center overflow-hidden'>
    <div className='absolute bg-[#e7e8e9] inset-0 z-0'><img src={grey_bg}  className='w-full'/></div>
    
    <div className='relative flex-col border border-black z-10 h-85 w-[25%] bg-white flex items-center  pt-2 gap-3'>
      <div className='relative top-0 text-2xl font-semibold mb-5'>Create an account</div>
      <div className='w-full border border-gray-500 h-10 rounded-[4px] p-2'><input type='text' name="email" value={register.email} placeholder='Enter Email' className=' resize-none focus:outline-none' onChange={(e)=>{Onchangeinput(e,"email")}}></input></div>
      <div className='w-full border border-gray-500 h-10 rounded-[4px] p-2'><input type='text' name="Username" value={register.f_name} placeholder='Enter Username' className=' resize-none focus:outline-none' onChange={(e)=>{Onchangeinput(e,"f_name")}}></input></div>
    
      <div className='w-full border border-gray-500 h-10 mb-2 rounded-[4px] p-2'><input type="password" name="Password" value={register.password} placeholder='Enter Password' className=' resize-none focus:outline-none' onChange={(e)=>{Onchangeinput(e,"password")}}></input></div>
      
      <div className='relative flex flex-col bottom-0 gap-2'>
        <div className=' active:scale-103 transition text-[15px]'><button className='border-2 rounded-4xl border-gray-600 pl-4 w-70 py-2 cursor-pointer' onClick={handleClick}>Sign up</button></div>
        <div className=' active:scale-103 transition'><button className='border-2 rounded-4xl border-gray-600' ><GoogleLogin size="large"  shape="pill" text="signin_with" width="280"/></button></div>
        </div>
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default SignUp
