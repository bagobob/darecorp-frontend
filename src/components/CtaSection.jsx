import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CtaSection = () => {
    const { t } = useTranslation();
    return (
        <div className='w-full bg-zinc-200 flex items-center justify-center mt-4'>
                <div className="mx-auto max-w-md text-center my-4 lg:mx-0 lg:flex-auto lg:py-24 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">{t('cta_title')}.<br />{t('cta_title_second')}</h2>
                    <p className="mt-6 text-lg leading-8">{t('cta_desc')}</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <Link to="/devis">
                            <button className='py-2.5 px-3.5 my-4'>{t('ask_devis_button')}</button>
                        </Link>
                        <Link to="/contact" className="text-sm font-semibold leading-6">{t('learn_more')} <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
        </div>
    )
}

export default CtaSection