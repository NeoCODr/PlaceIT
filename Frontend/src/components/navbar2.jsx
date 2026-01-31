import React, { useState } from 'react'
import bell from '../assets/BellRinging.png'
import { Link } from 'react-router-dom'
import Sidebar from './sidebar'
export const Navbar2 = () => {

 const [showslider, setshowslider] = useState(false)

  const sidepanel =()=>{
    setshowslider(!showslider)
  }

  return (
    <>
      <nav className=' background w-full h-15 border-black flex justify-center '>
        <div className='main w-[75%] h-[40px] flex justify-between self-center'>
          <div className='text h-auto font-semibold w-auto flex'><img src="logo.jpg" className='h-[40px] w-[40px] mr-0.5'/><div className=' text-2xl relative top-[1px]'>Place IT</div>
            <div className='search_box flex w-[686px] ml-[10px]'>
              <div className=' border flex w-[97px] items-center justify-center'>India</div>
              <textarea name="search" id="search" placeholder='Enter JOb to search' className=' border place-content-center w-[70%] h-[40px] resize-none pl-3'></textarea>

            </div>

          </div>
          <div className='buttons flex gap-8'>
            <div className='jobs'><Link to={"/jobpost"}><button type="button" className="text-white bg-blue-500 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-brand-medium shadow-xs leading-5 rounded-base text-base p-2 focus:outline-none h-[40px] w-[130px] text-[14px] font-bold">Post a Job</button></Link></div>
            <div className='notification  pt-2 hover:scale-107'> <img src={bell} alt="" />
            </div>
            
            <div className='Profile border border-black rounded-3xl w-11 h-11 hover:scale-107  ' onClick={sidepanel}> <img src="profile.jpg" alt="profile" />
            </div>
            
          </div>

        </div>

      </nav>
{showslider && <Sidebar />}
    </>
  )
}
export default Navbar2