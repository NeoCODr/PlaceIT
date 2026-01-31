
import Googlelogin from '../components/google Login/googlelogin'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import grey_bg from '../assets/bggrey.png'
import { ToastContainer,toast} from 'react-toastify' 
import axios from'axios'

const SignIn = (props) => {
  const navigate = useNavigate()
  const [loginfield ,setLoginField] = useState({f_name:"", password:""})

  const Onchangeinput = (event , key)=>{
    setLoginField({...loginfield,[key]:event.target.value})
  }

  const handlelogin=async()=>{
    if(loginfield.f_name.trim().length===0 || loginfield.password.trim().length===0){
      console.log(loginfield)
      return toast.error("Please fill all the credentials")
    }
    
    await axios.post('http://localhost:4000/api/auth/login',loginfield,{withCredentials:true}).then((res)=>{
      props.changeloginvalue(true)
      localStorage.setItem("isLogin","true")
      localStorage.setItem("userInfo",JSON.stringify(res.data.Userexist))
      navigate("/jobs", {replace:true})


    }).catch(err=>{
      console.log(err)
      toast.error(err?.response?.data?.error)
    })

    
}  
  return (
   <>
   <div className='relative flex min-h-screen justify-center items-center  overflow-hidden'>
    <div className='absolute inset-0 z-0'><img src={grey_bg}  className='w-full'/></div>
    
    <div className='relative flex-col border border-black z-10 h-85 w-[25%] flex items-center  pt-2 gap-3 bg-[#e7e8e9]'>
          <div className='relative top-0 text-2xl font-semibold mb-1'>Sign In</div>
          <div className='w-full border border-gray-500 h-10 rounded-[4px] p-2'><input type="text" className=' resize-none focus:outline-none' placeholder='Enter Full Name' value={loginfield.f_name} onChange={(e)=>{Onchangeinput(e,"f_name")}}/>
        </div>
        
          <div className='w-full border border-gray-500 h-10 mb-2 rounded-[4px] p-2'><input type="password" name="Password" id="" placeholder='Enter Password' className=' resize-none focus:outline-none' value={loginfield.password} onChange={(e)=>{Onchangeinput(e,"password")}}/></div>
          
          <div  className='relative flex flex-col bottom-0 gap-1 items-center'>
            <div className=' active:scale-103 transition text-[15px]'><button onClick={handlelogin} className='border-2 rounded-4xl border-gray-600 pl-4 w-70 py-2 cursor-pointer'>Sign In</button></div>
            <div className=' active:scale-103 transition text-[15px]'><a href={'/Username_signin'}><button className='border-2 rounded-4xl border-gray-600 pl-4 w-70 py-2 cursor-pointer'>Sign in with email</button></a></div>
            <div className=' active:scale-103 transition'><button className='border-2 rounded-4xl border-gray-600'><Googlelogin changeloginvalue={props.changeloginvalue}/></button></div>
            <div>Dont have an account? <a href={'/signup'} className=' text-blue-700 hover:underline'>Sign up</a></div>
            </div>
            </div>

    </div>
   
            <ToastContainer/>

   </>
  )
}

export default SignIn
