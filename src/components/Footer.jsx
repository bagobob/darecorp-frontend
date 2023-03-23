import React from 'react';
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaWhatsapp
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-gray-300 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Links</h6>
                <ul>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Service</li>
                    <li className='py-1'>Contact</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Services</h6>
                <ul>
                    <li className='py-1'>Web</li>
                    <li className='py-1'>Design</li>
                    <li className='py-1'>Consulting</li>
                    <li className='py-1'>App</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About Us</li>
                    <li className='py-1'>Join Us</li>
                    <li className='py-1'>Help Center</li>
                    <li className='py-1'>ECommerce</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Privacy Policy</li>
                    <li className='py-1'>Legal Notices</li>
                    <li className='py-1'>Data Protection</li>
                    <li className='py-1'>Cookies</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter your email...'/>
                    <button className='p-2 mb-4 '>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto  justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>&copy;2023 Darecorp. All rights reserved.</p>
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