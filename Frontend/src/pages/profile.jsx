import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Modal from '../components/Modal/modal'
import Imagemodal from '../components/ImageModal/imagemodal'
import EditIcon from '@mui/icons-material/Edit';
import ImageModal2 from '../components/ImageModal/imageModal2'


const Profile = () => {
    const [imagemodal, setimagemodal] = useState(false)
    const [imagemodal2, setimagemodal2] = useState(false)

    const handleimagemodal = () => {
        setimagemodal(prev => !prev)
    }
    const handleimagemodal2 = () => {
        setimagemodal2(prev => !prev)
    }

    const handleonedit =()=>{
        setimagemodal(true)
    }
    const handleonedit2 =()=>{
        setimagemodal2(true)
    }

    const [data, setdata] = useState(null)

    useEffect(() => {
        const { _id } = JSON.parse(localStorage.getItem("userInfo"))
        console.log(_id)
        axios.put(`http://localhost:4000/api/auth/profile/${_id}`).then((res) => {
            console.log(res.data.isExist)
            setdata(res.data.isExist)

        })
    }, [])




    return (
        <>
            <div className='relative min-h-screen w-full flex justify-center '>
                <div className='absolute z-0 bg-[#D9D9D9] inset-0'></div>
                <div className=' relative main z-10  border-2 w-[70%]  flex flex-col items-center p-5 gap-5'>
                    <div className='top flex w-full h-80 border-2 px-2 justify-center gap-7 bg-white'>
                        
                      
                        <div className=' relative flex border-2 w-[80%] mt-10  z-0 rounded-xl'>
                            <img src={data?.coverpic} alt="no img found" className='w-full h-full'/>
                        <div onClick={handleonedit} className='absolute right-5  top-2 z-20 cursor-pointer' ><EditIcon sx={{color: "white"}}/></div>
                        <div className='border-2 w-25 rounded-full h-25 absolute bottom-5 left-5'onClick={handleonedit2}><EditIcon sx={{color: "white"}} className='absolute bottom-1 right-[-5px] cursor-pointer'/></div>
                        </div>
                        
                    </div>

                    <div className='w-full border-2 '></div>



                </div>
                {
                    imagemodal && <Modal closemodal={handleimagemodal} title = "Upload Cover Image">
                    <Imagemodal Data = {data} />
                </Modal>
                }
                {
                    imagemodal2 && <Modal closemodal={handleimagemodal2} title = "Upload Profile Image ">
                    <ImageModal2 Data = {data} />
                </Modal>
                }
            </div>
        </>
    )
}

export default Profile
