import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';


const Accordeon = ({img,title, acordion1, acordion2, acordion3, order}) => {
    const [activeIndex, setActiveIndex] = useState(1);
    
    return (
        <div className='w-full '>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className={`${order}`}>
                    <img src={img} alt={title} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                <h1 className='py-8 text-5xl md:font-bold'>{title}</h1>
                    <AccordionLayout
                        title={acordion1.title}
                        index={1}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                    {acordion1.content}
                    </AccordionLayout>

                    <AccordionLayout
                        title={acordion2.title}
                        index={2}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        {acordion2.content}
                    </AccordionLayout>
                    <AccordionLayout
                        title={acordion3.title}
                        index={3}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    >
                        {acordion3.content}
                    </AccordionLayout>

                </div>

            </div>
        </div>
    )
}

export default Accordeon