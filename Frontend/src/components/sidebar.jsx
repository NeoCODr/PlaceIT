import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className='absolute right-0  h-full bg-white border-2 w-60 flex flex-col gap-3 pt-10'>
        <div className='border-2 h-10 bg-blue-500 text-white rounded-xl text-center pt-2'>Profile</div>
        <div className='border-2 h-10 bg-blue-500 text-white rounded-xl text-center pt-2'>Job Posting</div>
    </div>
    </>
  )
}

export default Sidebar
