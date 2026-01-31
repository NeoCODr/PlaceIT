import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


const Jobpost = () => {


    const [Data, setData] = useState({
        title: "",
        job_type: "",
        company_name: "",
        description:"",
        location:""
    })

    const reqfields = ["title", "job_type", "company_name", "location", "description"]
    const OnChangeInput = (event, key) => {
        setData({ ...Data, [key]: event.target.value })
    }
    
    const payload = {...Data}
    if(payload.salary?.trim()===""){
        delete payload.salary

    }

    const handleclick = async () => {
        // console.log(payload)
        // console.log(Data.title.length)
        for (const key of reqfields) {
            if (!Data[key] === undefined || Data[key].trim().length === 0) {
                toast.error("Please fill all the credentials")
                return
            }
        }

        // console.log(Data.title)
        // console.log(Data)
        axios.post('http://localhost:4000/api/post/jobs', payload, { withCredentials: true }).then((res) => {
        
            toast.success("Job profile created Successfully")
            
        }).catch(err => {
            console.log(err)
        })





    }


    return (
        <>
            <div className='relative min-h-screen w-full flex justify-center '>
                <div className='absolute z-0 bg-[#D9D9D9] inset-0'></div>
                <div className=' relative main z-10  border-2 w-[80%]  flex flex-col items-center p-5 gap-5'>
                    {/* <div className='top flex w-full h-40 border-2 px-2 justify-center gap-7 bg-white'>
                        <div className='border-2 w-20 rounded-full mb-12 hover:scale-103 active:scale-107 transition'></div>
                        <div className=' flex border-2 w-[80%] mt-10'></div>
                    </div> */}
                    <div className='bottom w-full flex gap-2 h-full bg-white border-2'>
                        <div className='relative left w-[70%] border-2 p-8 flex flex-col gap-5'>
                            <div className=' font-semibold text-4xl mb-5'>Fill The Details</div>

                            <div className='desp '><span>Job Title:</span><input type="text " className='border-2 focus:outline-none mx-2 ' onChange={(e) => { OnChangeInput(e, "title") }} /></div>
                            <div className='desp '><span>Job Type:</span><select className='border-2 ml-2' onChange={(e) => { OnChangeInput(e, "job_type") }}>
                                <option value="" >Select job type</option>
                                <option value="Part-Time">PART-TIME</option>
                                <option value="Full-Time">FULL-TIME</option>
                                <option value="Hybrid">HYBRID</option>
                            </select></div>
                            <div className='desp '><span>Company's Name:</span><input type="text " className='border-2 focus:outline-none mx-2' onChange={(e) => { OnChangeInput(e, "company_name") }} /></div>
                            <div className='desp '><span>Salary:</span><input type='text' className='border-2 focus:outline-none mx-2 ' onChange={(e) => { OnChangeInput(e, "salary") }} placeholder='Optional' /></div>
                            <div className='desp '><span>Location:</span><input type="text " className='border-2 focus:outline-none mx-2' onChange={(e) => { OnChangeInput(e, "location") }} /></div>
                            <div className='desp '><div className='flex gap-2'>Description:<textarea name="desp" className=' border-2 h-50 w-full resize-none' onChange={(e) => { OnChangeInput(e, "description") }}></textarea></div></div>
                        </div>
                        <div className='right flex flex-col w-[30%]'>
                            <div className='border-2 w-60 rounded-full h-60  mt-2 hover:scale-103 active:scale-107 transition self-center'></div>
                            <div className=' text-center mt-3 font-medium'>Company's Logo</div>
                            <div className='button border-2 border-black h-12 mt-auto text-center content-center rounded-2xl hover:scale-101 cursor-pointer active:scale-105 transition mb-3 mr-2 bg-blue-600 text-white' onClick={handleclick} >Save</div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Jobpost
