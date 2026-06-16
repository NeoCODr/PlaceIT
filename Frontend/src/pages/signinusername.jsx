import Googlelogin from '../components/google Login/googlelogin'
import React, { useState } from 'react'
import { Link, replace, useNavigate } from 'react-router-dom'
import grey_bg from '../assets/bggrey.png'
import axios from 'axios'
import {ToastContainer, toast } from 'react-toastify'


const SignInuser = () => {
  const navigate = useNavigate()
  const [credentials, setcredentials]=useState({email:"", password:""})

 const Onchangeinput =(event,key)=>{
   setcredentials({...credentials,[key]:event.target.value})
 }

 const handlesignin=async()=>{
  if(credentials.email.trim().length===0|| credentials.password.trim().length===0){
    toast.error("Please Fill all the credentials")
  }

  await axios.post("http://localhost:4000/api/auth/emaillogin",credentials,{withCredentials:true}).then((res)=>{
    console.log(res)
    localStorage.setItem("isLogin","true")
    localStorage.setItem("userInfo",JSON.stringify(res.data.Userexist))
    navigate("/jobs",{replace:true})
  }).catch(err=>{
    console.log(err)
    toast.error(err?.response?.data?.error)
  })

 }

  return (
   <>
   <div className='relative flex min-h-screen justify-center items-center  overflow-hidden'>
    <div className='absolute bg-[#e7e8e9] inset-0 z-0'><img src={grey_bg}  className='w-full'/></div>
    
    <div className='relative flex-col border border-black z-10 h-85 w-[25%] bg-white flex items-center  pt-2 gap-3'>
          <div className='relative top-0 text-2xl font-semibold mb-2'>Sign In</div>
          <div className='w-full border border-gray-500 h-10 rounded-[4px] p-2'><input  value={credentials.email}  type="text" name="Username" placeholder='Enter Email' className=' resize-none focus:outline-none' onChange={(e)=>{Onchangeinput(e,"email")}}></input></div>
        
          <div className='w-full border border-gray-500 h-10 mb-9 rounded-[4px] p-2'><input value={credentials.password} type="password" name="Password"  placeholder='Enter Password' className=' resize-none focus:outline-none' onChange={(e)=>{Onchangeinput(e,"password")}} ></input></div>
          
          <div className='relative flex flex-col bottom-0 gap-1 items-center'>
            <div className=' active:scale-103 transition text-[15px]'><button className='border-2 rounded-4xl border-gray-600 pl-4 w-70 py-2 cursor-pointer' onClick={handlesignin}>Sign in</button></div>
            <div className=' active:scale-103 transition'><button className='border-2 rounded-4xl border-gray-600'><Googlelogin size="large"  shape="pill" text="signin_with" width="280"/></button></div>
            <div>Dont have an account? <a href={'/signup'} className=' text-blue-700 hover:underline'>Sign up</a></div>
            </div>
            </div>
    </div>
   <ToastContainer/>

   </>
  )
}

export default SignInuser