import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWork = () => {
    const { t } = useTranslation();
    return (
        <div name="about" className="w-full my-32">
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center py-8'>
                    <h2 className='text-5xl font-bold'>How It Works</h2>
                    <p className='text-3xl py-6 text-gray-500'>
                        {t('transition_content')}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-1/2 text-center p-4 border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-600">Receuil du besoin et étude</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 hidden md:block' viewBox="0 0 24 24">
                        <path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414z" style={{ fill: "#4f46e5" }} data-name="Right" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 block md:hidden' viewBox="0 0 24 24">
                        <path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z" style={{ fill: "#4f46e5" }} data-name="Down" />
                    </svg>
                    <div className="w-full md:w-1/2 text-center p-4 border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-600">Réalisation du produit</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 hidden md:block' viewBox="0 0 24 24">
                        <path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414z" style={{ fill: "#4f46e5" }} data-name="Right" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 block md:hidden' viewBox="0 0 24 24">
                        <path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z" style={{ fill: "#4f46e5" }} data-name="Down" />
                    </svg>
                    <div className="w-full md:w-1/2 text-center p-4 border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-600">Test et validation</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 hidden md:block' viewBox="0 0 24 24">
                        <path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414z" style={{ fill: "#4f46e5" }} data-name="Right" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 block md:hidden' viewBox="0 0 24 24">
                        <path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z" style={{ fill: "#4f46e5" }} data-name="Down" />
                    </svg>
                    <div className="w-full md:w-1/2 text-center p-4 border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-600">Livraison et formation</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 hidden md:block' viewBox="0 0 24 24">
                        <path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414z" style={{ fill: "#4f46e5" }} data-name="Right" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 text-indigo-600 my-auto mx-4 block md:hidden' viewBox="0 0 24 24">
                        <path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z" style={{ fill: "#4f46e5" }} data-name="Down" />
                    </svg>
                    <div className="w-full md:w-1/2 text-center p-4 border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-600">Support technique</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className="py-3 px-16 m-8">Get Started</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default HowItWork