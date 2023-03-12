import React from 'react'

const Newsletter = () => {
  return (
    <div className='absolute flex flex-col md:min-w-[760px] md:left-1/2  transform md:-translate-x-1/2  mb-4'>
        <div className='bg-[#FFFFFF] rounded-[55px] py-20 px-40 mb-16 -mt-32'>
                <h3 className='font-bold tracking-[0.5px] leading-6 mb-4 text-3xl text-center'>Subscribe to our newsletter</h3>
            <div className='flex relative  items-center'>
                    <div className='border border-indigo-600 rounded-2xl mr-4 '>
                        <input type="email" placeholder="Email Address" className='w-[100%] py-4 px-16 m-4 rounded-md outline-none' />
                    </div>
                <button className='px-8 py-4'>Submit</button>
            </div>
    </div>
    </div>
   
  )
}

export default Newsletter