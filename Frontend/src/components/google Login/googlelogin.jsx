import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Googlelogin = () => {
const navigate = useNavigate()
    const handleOnSucess= async(credResponse)=>{
        const token = credResponse.credential
        const res = await axios.post('http://localhost:4000/api/auth/google',{token},{withCredentials: true})
        console.log(res)
        localStorage.setItem("isLogin", "true")
        localStorage.setItem("userInfo", JSON.stringify(res.data.user))
        
        navigate("/jobs", {replace:true})
    }
        

  return (
    <>
    
    <GoogleLogin size="large"  shape="pill" text="signin_with" width="280"
        onSuccess={(credentialResponse) =>handleOnSucess( credentialResponse)}
            onError={()=>{
                console.log('Login Failed')
             }}/>
   
    </>
  )
}

export default Googlelogin
