import React from 'react'

const Modal = (props) => {
    

  return (
    <>
    <div className=' bg-black/50 fixed inset-0 top-0 left-0 z-20 flex justify-center items-center'> 
        <div className='w-[95%] md:w-[50%] h-[500px] bg-white rounded-xl p-10'>
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className=' text-2xl'>{props.title}</div>
                    
                </div>
                <div onClick={()=>props.closemodal()} className='cursor-pointer border-2'>close</div>
            </div>
                <div className=' h-full mt-7'>{props.children}</div>
                
        </div>

    </div>
    </>
  )
}

export default Modal
