import React from 'react';
import withTranslation from '../withTranslation';

const Card = (props) => {
  
  return (
    <div className='w-full'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className={`${props.order}`}>
                <img src={props.img} alt='web_development' />
            </div>
            <div className='flex flex-col justify-center md:items-start w-full px-2'>
                <h1 className='py-8 text-5xl md:font-bold'>{props.t(props.title)}</h1>
                <p className='font-medium text-slate-600 mb-8'>
                {props.t(props.firstText)} 
                </p>
                <p className='font-medium text-slate-600 mb-8'>
                {props.t(props.secondText)}
                </p>
                <button className="py-3 px-6 my-4">More Infos</button>
            </div>
        </div>

    </div>
  )
}

export default withTranslation(Card)