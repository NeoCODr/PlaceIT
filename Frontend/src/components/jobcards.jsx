import React from 'react'

const Jobcards = () => {
  return (
    <>
    <div className='flex w-full justify-between bg-[#e7e8e9] h-15 items-center px-48 '>
          <div>Find Job</div>
          <div className='flex gap-2 text-[13px] font-semibold'><div className='text-gray-500'>
            Home/</div>
            <div>Find job</div></div>
        </div>
        <div className=' border border-black min-h-screen px-48'>
            <div>hello</div>
          <div className='border border-black w-full flex gap-20 '>
            <div className='h-[130px] w-[330px] border border-black p-4 '>
              <div>Techical Support Specialist</div>
              <span className='bg-[#cbf8d4] p-1 text-[13px] text-[#0BA02C] font-semibold rounded-[5px]'>Yourtext</span>
              <span className='text-gray-500 text-[14px] ml-2'>Salary:</span>
              <div className='flex mt-3'><img src="logo.png" alt="" className='h-10 w-10 border border-black mr-3'/><div className='flex flex-col'><div>Company's Name</div>
              <div className='flex text-[14px] gap-2'><img src={mappin} alt=""className='h-5 pt-1'/><span className='text-gray-500'>Location</span></div>
              </div>
              </div>
            </div>
            
          
          </div>
        </div>
        </>
  )
}

export default Jobcards
