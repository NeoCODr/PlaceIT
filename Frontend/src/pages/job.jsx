import React from 'react'



const Jobdesp = () => {
    return (
        <>
            <div className='relative min-h-screen px-30 py-2'>
                <div className='absolute z-0 bg-[#dcdee1] inset-0 '></div>
                <div className='relative flex min-h-screen border-2  bg-white z-10'>
                    <div className='left  border-2 w-[70%] p-10  bg-[#dcdee1]'>
                        <div className=' text-4xl font-semibold'>Lorem, ipsum.</div>
                        <div className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non architecto earum. Sit incidunt accusamus aliquid quae perspiciatis ipsum repellendus debitis sed veritatis ratione doloremque nobis odit dolorum, provident eius qui aut illo sint rerum itaque inventore ducimus consequuntur. Omnis magni ipsa fugit! Rerum deleniti exercitationem ea adipisci numquam laboriosam id nesciunt dignissimos! Sapiente esse rerum odio eius? Neque nesciunt culpa obcaecati explicabo nemo, delectus cupiditate deleniti repellat iure beatae. Illo rerum deleniti possimus molestiae culpa esse aliquam doloremque accusamus in quam quidem quos perspiciatis, sapiente ducimus nemo quasi. Molestiae, iste assumenda illum maxime enim velit vel quae omnis nobis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at quia, laborum eius autem quidem magni. Voluptatibus tempora, molestias blanditiis culpa, rerum nulla qui assumenda ipsam quisquam dolorem harum? Ea?</div>
                    </div>
                    <div className='right border-2  w-[30%] p-10 flex flex-col  '>
                        <div className=' text-4xl font-semibold'>Requirements</div>
                        <div className='mt-5 '> <ul class="list-disc flex flex-col gap-5 mb-3">
                            <li>Requirements</li>
                            <li>Requirements</li>
                            <li>Requirements</li>
                            <li>Requirements</li>
                            <li>Requirements</li>
                            <li>Requirements</li>


                        </ul>
                        </div>

                        <div className='button border-2 border-black h-12 mt-auto text-center content-center rounded-2xl hover:scale-101 cursor-pointer active:scale-105 transition '>Save</div>
                        <div className='button border-2 border-black h-12 mt-1 text-center content-center rounded-2xl hover:scale-101 cursor-pointer active:scale-105 transition bg-blue-600 text-white'>Apply Now</div>
                       


                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobdesp