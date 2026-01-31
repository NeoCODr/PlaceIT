import React from 'react'
// import SignIn from '../pages/SignIn'
import { Link } from 'react-router-dom'





export const Navbar1 = () => {
  return (
    <>
      <nav className=' background w-full h-15 border-black flex justify-center '>
        <div className='main w-[75%] h-[40px] flex justify-between self-center'>
          <div className='text h-auto font-semibold w-auto flex'><img src="logo.jpg" className='h-[40px] w-[40px] mr-0.5'/><div className=' text-2xl relative top-[1px]'> <Link to={'/'}>Place IT</Link></div>
            <div className='search_box flex w-[686px] ml-[10px]'>
              <div className=' border flex w-[97px] items-center justify-center'>India</div>
              <textarea name="search" id="search" placeholder='Enter JOb to search' className=' border place-content-center w-[70%] h-[40px] resize-none pl-3'></textarea>

            </div>

          </div>
          <div className='buttons flex gap-2'>
            <Link to={'/SignIn'} className='sign in '> <button type="button" className="text-blue-500 bg-neutral-primary border border-blue-500 hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle rounded-base text-base p-2 focus:outline-none h-[40px] w-[90px] text-[14px] font-bold">Sign In</button>
            </Link>
            <div className='jobs'><Link to={"/SignIn"}><button type="button" className="text-white bg-blue-500 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-brand-medium shadow-xs leading-5 rounded-base text-base p-2 focus:outline-none h-[40px] w-[130px] text-[14px] font-bold">Post a Job</button></Link>
            </div>
          </div>

        </div>

      </nav>

    </>
  )
}
export default Navbar1