import React from 'react';
import {
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
    AcademicCapIcon

} from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import bagImg from "../assets/bg-illustration-removebg.png";
import {Link} from 'react-scroll';
import Scroll from './Scroll';

export const Hero = () => {

    const { t, i18n } = useTranslation();
  return (
    <div name="home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2'>
                <p className='text-2xl pt-24 md:text-2xl'>{t('hero_first_p')}</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>{t('hero_h1')}</h1>
                <p className='text-2xl'>{t('hero_second_p')}</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div >
                <img className="w-full object-cover" src={bagImg} alt="" />
            </div>
            <div className={`absolute flex flex-col md:min-w-[760px]
            bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl ${i18n.language === 'fr' ? 'py-4' : 'py-8'}`}>
                <p>{t('our_services')}</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500 cursor-pointer link'><ServerIcon className='h-8 text-indigo-600   px-4 py-2 ' />
                    <Link activeClass="active" to="service" spy={true} smooth={true} offset={-50} duration={500}>{t('web_dev')}</Link>
                    </p>
                    <p className='flex px-4 py-2 text-slate-500 cursor-pointer link'><DatabaseIcon className='h-8 text-indigo-600  px-4 py-2' />
                        <Link activeClass="active" to="service" spy={true} smooth={true} offset={-50} duration={500}>{t('design')}</Link>
                    </p>
                    <p className='flex px-4 py-2 text-slate-500 cursor-pointer link'><AcademicCapIcon className='h-8 text-indigo-600  px-4 py-2 ' />
                    <Link activeClass="active" to="service" spy={true} smooth={true} offset={-50} duration={500}>{t('it_consult')}</Link>
                    </p>
                    <p className='flex px-4 py-2 text-slate-500 cursor-pointer link'><PaperAirplaneIcon className='h-8 text-indigo-600  px-4 py-2' />
                    <Link activeClass="active" to="service" spy={true} smooth={true} offset={-50} duration={500}>{t('app_dev')}</Link>
                    </p>
                </div>
            </div>
        </div>
        <Scroll />
    </div>
)
}
