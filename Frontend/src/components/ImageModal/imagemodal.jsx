import axios from 'axios'
import React from 'react'
import { useEffect ,useState } from 'react'

const Imagemodal = (props) => {
  const [img , setimg] = useState(props.Data.profile_pic)
  // console.log(img)
  const change = async () => {
    try{
       
    const res = await axios.post("http://localhost:4000/api/auth/coverpic", {user: props.Data , newimg:"newurl"})
    console.log(res.data)
    setimg(res.data.coverpic)
    }catch(err){
      console.log(err)
    }}
  return (
    <>
      <div className='w-full  h-[80%]'>
        
        <img src={img} alt="no img found" className='w-full h-full'/>

      </div>
      <div className='flex gap-2 relative justify-end'>
        <div className='border-2 mt-5' onClick={()=>{change()}}>Upload</div>
      </div>
    </>
  )
}

export default Imagemodal
