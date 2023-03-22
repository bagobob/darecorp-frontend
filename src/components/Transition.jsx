import React from 'react'

export const Transition = ({ bgColor, textColor, useCard = false }) => {

    return (
        <div name="about" className={`w-full my-32 ${bgColor} ${textColor}`}>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center py-8'>
                    <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                    <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                </div>

                {useCard && <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100k</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>
                </div>}
                {!useCard && (
                    <div className='flex justify-center items-center pb-3'>
                        <button className='py-3 px-3 sm:w-[25%]'>find a challenge</button>
                    </div>
                )

                }
            </div>
        </div>
    )
}
