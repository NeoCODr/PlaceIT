import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Jobdesc = () => {

 const[ details , setDetails] = useState([])
 const {id} = useParams()
 useEffect(()=>{

    axios.get(`http://localhost:4000/api/post/jobs/${id}`,{withCredentials:true}).then((res)=>{
        setDetails(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
    
},[])
console.log(details)

const handleclick = async()=>{
    axios.put("http://localhost:4000/api/auth/applied",details,{withCredentials:true}).then((res)=>{
        console.log(res)
        console.log("job applied successfully")
    })
}

// console.log(details)

  return (
    <>
    <div className=' bg-gray-300 pt-8'>
        <div className='flex bg-white px-40 items-center h-25 justify-between pt-5'>
            <div className="flex border-2 "><div className='border-2 size-19 rounded-full'><img src={details.logo} alt="logo" className=' size-max'/></div>
            <div className='flex flex-col'>{details.title}
                <div className='flex gap-3'>at {details.company_name}
                    <div>{details.job_type}</div>
                </div>
            </div>
            </div>
            <div className="border-2 h-13 w-50 bg-blue-500 rounded-[4px] text-white text-center pt-3 active:bg-blue-600 hover:cursor-pointer active:scale-102 transition" onClick={handleclick}> Apply Now</div>
        </div>
    <div className='main min-h-screen  flex bg-white px-40 pb-5'> 
    <div className='left border-2 w-[65%] text-2xl font-medium'>Job Description
        <div className='border-2 h-full text-[20px] pr-3'>{details.description}</div>
    </div>
    <div className='right border-2 w-[40%] flex justify-center'>
        <div className='border-2 h-30 w-50'></div>
        <div className='border-2 h-30 w-50'></div>
    </div>

    </div>
    </div>
    </>
  )
}

export default Jobdesc
