import React from 'react';
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaWhatsapp
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
  return (
    <div className='w-full bg-slate-900 text-gray-300 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>{t('links')}</h6>
                <ul>
                    <li className='py-1'>{t('home')}</li>
                    <li className='py-1'>{t('about')}</li>
                    <li className='py-1'>{t('service')}</li>
                    <li className='py-1'>{(t('contact'))}</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>{t('service')}</h6>
                <ul>
                    <li className='py-1'>{t('web')}</li>
                    <li className='py-1'>{t('design')}</li>
                    <li className='py-1'>{t('consulting')}</li>
                    <li className='py-1'>{t('app')}</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>{t('company')}</h6>
                <ul>
                    <li className='py-1'>{t('apropo')}</li>
                    <li className='py-1'>{t('join')}</li>
                    <li className='py-1'>{t('help')}</li>
                    <li className='py-1'>{t('ecommerce')}</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>{t('legal')}</h6>
                <ul>
                    <li className='py-1'>{t('privacy')}</li>
                    <li className='py-1'>{t('legal_notice')}</li>
                    <li className='py-1'>{t('data_protection')}</li>
                    <li className='py-1'>{t('cookies')}</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>{t('newsletter')}</p>
                <p className='py-4'>{t('latest')}</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter your email...'/>
                    <button className='p-2 mb-4 '>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto  justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>&copy;{t('copyright')}</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook className='cursor-pointer hover:text-indigo-600' />
                <FaInstagram className='cursor-pointer hover:text-indigo-600' />
                <FaTwitter className='cursor-pointer hover:text-indigo-600' />
                <FaYoutube className='cursor-pointer hover:text-indigo-600' />
                <FaWhatsapp className='cursor-pointer hover:text-indigo-600' />
                <FaLinkedin className='cursor-pointer hover:text-indigo-600' />
            </div>
        </div>
    </div>
  )
}
