import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from '../components/navbar1'
import Endbar from '../components/endbar'

const Exceplayout = () => {
  return (
    <>
    <Navbar1/>
    <Outlet/>
    <Endbar/>

    </>
  )
}

export default Exceplayout
