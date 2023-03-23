import React from 'react'

const ContactTransition = () => {
  return (
    <div className='w-full h-[50vh] bg-slate-900 text-white flex flex-col justify-center items-center'>
    <div className='max-w-[1240px] mx-auto h-[50vh]'>
      <div className='text-center py-8'>
        <h2 className='text-2xl md:text-5xl font-medium'>looking for your next challenge?</h2>
        <h2 className='text-2xl md:text-5xl font-medium'>check out our latest opportunities</h2>
      </div>
      <div className='flex justify-center items-center'>
        <button className='py-3 px-5 sm:w-[60%]'>find a challenge</button>
      </div>
    </div>
  </div>
  )
}

export default ContactTransition