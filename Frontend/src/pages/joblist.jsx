import React, { useEffect, useState } from 'react'
import mappin from '../assets/MapPin.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Jobs = () => {
  const navigate = useNavigate()
  const [jobs, setjobs] = useState([])



  const showjobs = (async () => {

    await axios.get("http://localhost:4000/api/post/findjob").then((res) => {
      // console.log("res",res)
      if (res.data.length === 0) {
        toast.error("No Jobs available")
      }


      setjobs(res.data.data)




      // console.log(res.data)


    }).catch(err => {
      console.log(err)
    })
  })
  useEffect(() => {
    showjobs()
  }, [])

  const handleclick = async (key) => {
    try {
     
      navigate(`/jobs/${key}`)
    } catch (err) {
      console.log(err.response?.data)
    }
  }


  return (
    <>


      <div className='flex w-full justify-between bg-[#e7e8e9] h-15 items-center px-48 '>
        <div>Find Job</div>
        <div className='flex gap-2 text-[13px] font-semibold'><div className='text-gray-500'>
          Home/</div>
          <div>Find job</div></div>
      </div>
      <div className='  border-black min-h-screen px-[191px]'>

        <div className=' border-black w-full flex gap-20 mt-10 mb-10 flex-wrap'>
          {jobs.map((job) => (
            <div key={job._id}>
              <div className='h-[130px] w-[330px] border border-black p-4 hover:scale-102 cursor-pointer transition ' onClick={() => { handleclick(job._id) }}>


                <div>{job.title}</div>
                <span className='bg-[#cbf8d4] p-1 text-[13px] text-[#0BA02C] font-semibold rounded-[5px]'>{job.job_type}</span>
                <span className='text-gray-500 text-[14px] ml-2'>Salary:{job.salary}</span>
                <div className='flex mt-3'><img src="logo.png" alt="" className='h-10 w-10 border border-black mr-3' /><div className='flex flex-col'><div>{job.company_name}</div>
                  <div className='flex text-[14px] gap-2'><img src={mappin} alt="" className='h-5 pt-1' /><span className='text-gray-500'>{job.location}</span></div>
                </div>
                </div>
              </div>

            </div>))}

        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Jobs
