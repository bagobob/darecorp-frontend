import React from 'react';
import {
    ArrowSmRightIcon
} from '@heroicons/react/outline';

import { QrcodeIcon, DesktopComputerIcon,DeviceMobileIcon, PencilIcon} from "@heroicons/react/solid";
import serviceImg from "../assets/service.jpg";
import { useTranslation } from 'react-i18next';
import webDevService from "../assets/service_web.png";
import graphicDesignService from "../assets/graphic_designer.png";
import itConsultService from "../assets/marketing_digital.png";
import appDevService from "../assets/app_dev.png";
import { Link } from 'react-router-dom';


export const Service = () => {
    const { t } = useTranslation();

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
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <DesktopComputerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>{t('web_dev')}</h3>
                        <div className='flex items-center h-48'>
                            <img src={webDevService} className="w-full h-full object-contain" alt="web_development"/>
                        </div>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <Link to="/service" className='flex items-center text-indigo-600 cursor-pointer'>More Info <ArrowSmRightIcon className='w-5 ml-2' /></Link>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl '>
                    <div className='p-8'>
                        <PencilIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>{t('design')}</h3>
                        <div className='flex items-center h-48'>
                            <img src={graphicDesignService} className="w-full h-full object-contain" alt="web_development"/>
                        </div>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <Link to="/service" className='flex items-center text-indigo-600 cursor-pointer'>More Info <ArrowSmRightIcon className='w-5 ml-2' /></Link>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <QrcodeIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>{t('it_consult')}</h3>
                        <div className='flex items-center h-48'>
                            <img src={itConsultService} className="w-full  h-full object-contain" alt="web_development"/>
                        </div>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <Link to="/service" className='flex items-center text-indigo-600 cursor-pointer'>More Info <ArrowSmRightIcon className='w-5 ml-2' /></Link>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <DeviceMobileIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>{t('app_dev')}</h3>
                        <div className='flex items-center h-48'>
                            <img src={appDevService} className="w-full  h-full object-contain" alt="web_development"/>
                        </div>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <Link to="/service" className='flex items-center text-indigo-600 cursor-pointer'>More Info <ArrowSmRightIcon className='w-5 ml-2' /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
