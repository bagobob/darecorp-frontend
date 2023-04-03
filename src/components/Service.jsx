import React from 'react';
import {
    ArrowSmRightIcon
} from '@heroicons/react/outline';

import { QrcodeIcon, DesktopComputerIcon,DeviceMobileIcon, PencilIcon} from "@heroicons/react/solid";
import serviceImg from "../assets/img/service.jpg";
import { useTranslation } from 'react-i18next';
import webDevService from "../assets/img/service_web.png";
import graphicDesignService from "../assets/img/graphic_designer.png";
import itConsultService from "../assets/img/marketing_digital.png";
import appDevService from "../assets/img/app_dev.png";
import { Link } from 'react-router-dom';


export const Service = () => {
    const { t } = useTranslation();

    const serviceArray = [
        {
            title: t('web_dev'),
            img: webDevService,
            icon: <DesktopComputerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
        },
        {
            title: t('design'),
            img: graphicDesignService,
            icon: <PencilIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
        },
        {
            title: t('it_consult'),
            img: itConsultService,
            icon: <QrcodeIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
        },
        {
            title: t('marketing_digital'),
            img: appDevService,
            icon: <DeviceMobileIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
        }
    ]
    

return (
    <div name="service" id="services" className='w-full mt-24 '>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={serviceImg} alt="serviceImg" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12 text-center'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>{t('our_service')}</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>{t('service_subtitle')}</h3>
                <p className='py-4 text-3xl text-slate-300'>{t('service_content')}</p>
            </div>

            <div  className='grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            {serviceArray && serviceArray.map((item, index) =>(
                <div className='bg-white rounded-xl shadow-2xl' key={index}>
                    <div className='p-8'>
                        {item.icon}
                        <h3 className='font-bold text-2xl my-6'>{item.title}</h3>
                        <div className='flex items-center h-48'>
                            <img src={item.img} className="w-full  h-full object-contain" alt="web_development"/>
                        </div>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <Link to="/service" className='flex items-center text-indigo-600 cursor-pointer'>{t('more_info')} <ArrowSmRightIcon className='w-5 ml-2' /></Link>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    </div>
  )
}
