import React from 'react'
import illustration from '../assets/illustration.png'
import feature from '../assets/Feature.png'
import feature1 from '../assets/Feature (1).png'
import feature2 from '../assets/Feature (2).png'
import feature3 from '../assets/Feature (3).png'
import process from '../assets/Process.png'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Landingpage = () => {
    return (
        <>
            <div className='relative min-h-screen pt-28'>
                <div className="absolute inset-0 bg-[#e7e8e9] z-0 "></div>
                <div className=' flex gap-2 w-[100%] justify-center h-fit'>
                    <div className='relative z-10 border border-black h-[364px] w-[580px] ml-58  flex flex-col'>
                        <div className='flex flex-col gap-5 p-4'>
                            <h2 className=' font-medium text-5xl text-black opacity-100 font-[inter] border border-black'>Find a job that suits your interest & skills.</h2>
                            <div className=' text-gray-600 font-[inter] mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, impedit? Iusto, quia consequuntur.</div>
                        </div>
                        <div className=' searchbox w-[100%] h-20 border border-black flex p-2 mt-4 items-center bg-white '>
                            <div className='relative w-fit h-15 border border-red-500 flex '>
                                <img src="search.jpg" className='h-10 w-10  self-center' />
                                <textarea className=" search resize-none p-2 pt-4 w-50 h-full focus:outline-none" id="search" placeholder='Job tittle, Keyword...'></textarea>
                            </div>
                            <div className='relative w-fit h-15 border border-red-500 flex '>
                                <img src="search.jpg" className='h-10 w-10  self-center' />
                                <textarea className=" location resize-none p-2 pt-4 w-40 h-full focus:outline-none" id="search" placeholder='Your Location'></textarea>
                            </div>
                           <Link to={'/signin'} className='h-[95%] border border-black bg-blue-500 w-[130px] text-white font-medium text-center py-5 hover:scale-105 transition'>Find Jobs</Link>
                        </div>
                        <div className='pt-4 flex text-[12px]  gap-1'>
                            <div className='text-gray-500 '>Suggestion:</div>
                            <div className='text-gray-800 hover:underline cursor-pointer'> Designer,</div>
                            <div className='text-gray-800 hover:underline cursor-pointer'> Programing,</div>
                            <div className='text-blue-900 hover:underline font-bold'> <a href=''>Digital Marketing,</a></div>
                            <div className='text-gray-800 hover:underline cursor-pointer'> Video,</div>
                            <div className='text-gray-800 hover:underline cursor-pointer'> Animation.</div>
                        </div>
                    </div>
                    <div className='  w-full flex relative mr-4 '><img src={illustration} alt="Failed to load" className='h-78  ml-17' /></div>

                </div>

                <div className='relative flex  border border-black z-10 w-full h-auto justify-center gap-10 mt-15'>
                    <div><img src={feature} alt="" className='w-60 hover:scale-115 transition' /></div>
                    <div><img src={feature1} alt="" className='w-60 hover:scale-115 transition' /></div>
                    <div><img src={feature3} alt="" className='w-60 hover:scale-115 transition' /></div>
                    <div><img src={feature2} alt="" className='w-60 hover:scale-115 transition' /></div>

                </div>

                <div className='relative border border-black flex flex-col mt-25  p-10 font-[Inter] items-center gap-25 h-[500px] '><div className='border border-red-600 text-5xl font-semiboldbold'>How Placeit Works</div>
                    <div className='border border-black w-[77%] hover:scale-101 transition'><img src={process} alt="Steps" /></div>
                </div>
            </div>
           
            

        </>
    )
}
export default Landingpage