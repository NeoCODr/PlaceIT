import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'


const Profile = () => {

    useEffect(() => {
      const {_id} = JSON.parse(localStorage.getItem("userInfo"))
      console.log(_id)
        axios.put(`http://localhost:4000/api/auth/profile/${_id}`).then((res)=>{
        console.log(res)
      })
    }, [])
    

    return (
        <>
            <div className='relative min-h-screen w-full flex justify-center '>
                <div className='absolute z-0 bg-[#D9D9D9] inset-0'></div>
                <div className=' relative main z-10  border-2 w-[80%]  flex flex-col items-center p-5 gap-5'>
                    <div className='top flex w-full h-40 border-2 px-2 justify-center gap-7 bg-white'>
                        <div className='border-2 w-20 rounded-full mb-12 hover:scale-103 active:scale-107 transition'></div>
                        <div className=' flex border-2 w-[80%] mt-10'></div>
                    </div>
                    <div className='bottom w-full flex gap-2 h-full bg-white border-2'>
                        <div className='w-[50%] border-2 '></div>
                        <div className='w-[50%] border-2 '></div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
