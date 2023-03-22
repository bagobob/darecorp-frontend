import React from 'react';

const Card = ({img, title, firstText, secondText, order}) => {
  return (
    <div className='w-full'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className={`${order}`}>
                <img src={img} alt='web_development' />
            </div>
            <div className='flex flex-col justify-center md:items-start w-full px-2'>
                <h1 className='py-8 text-5xl md:font-bold'>{title}</h1>
                <p className='font-medium text-slate-600 mb-8'>
                {firstText} 
                </p>
                <p className='font-medium text-slate-600 mb-8'>
                {secondText}
                </p>
                <button className="py-3 px-6 my-4">More Infos</button>
            </div>
        </div>

    </div>
  )
}

export default Card