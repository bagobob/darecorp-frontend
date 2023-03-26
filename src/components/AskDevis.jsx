import React from 'react';
import Devis from "../assets/img/devis_2.jpg";

const AskDevis = () => {
    return (
        <div className='w-full text-white mt-24 bg-slate-900'>
            <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto py-12 '>
                <div className="pt-24">
                    <img className="w-full" src={Devis} alt="" />
                </div>

                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 md:ml-8">
                    <h1 className='py-3 text-3xl md:text-5xl font-bold'>Vous avez des grands projets pour votre marque ? On en parle ?</h1>
                    <p className='py-4 font-medium text-gray-200'>Pour nous envoyer un extrait ou un petit mot, c'est par ici.</p>
                    <button className='py-4 px-6 my-4'>Contactez Nous</button>
                </div>
            </div>
        </div>
    )
}

export default AskDevis