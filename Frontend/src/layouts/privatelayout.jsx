import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Endbar from '../components/endbar'
import Navbar2 from '../components/navbar2'



const Privatelayout = () => {
  const isLogin = localStorage.getItem('isLogin')
  return isLogin?<><Navbar2/><Outlet/><Endbar/></>:<Navigate to={"/"} replace/>
  
  // return (
  //   <>
  //   <Navbar2/>
  //  <Outlet/>
  //   <Endbar/>
  //   </>
  // )
}

export default Privatelayout
