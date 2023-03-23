import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
  return (
    <>
        <div onClick={() => handleSetIndex(index)} className='flex w-1/2 justify-between p-2 mt-2 rounded bg-slate-900'>
            <div className='flex'>
                <div className='text-white font-bold'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
            {
                (activeIndex === index) 
                ? <BsFillArrowDownCircleFill className='w-8 h-8 text-white' />
                : <BsFillArrowUpCircleFill className='w-8 h-8 text-white' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6 text-center">
            <span className='font-medium text-slate-600'>
                {children}
            </span>
              
            </div>
        )}
    </>
  );
};

export default AccordionLayout;