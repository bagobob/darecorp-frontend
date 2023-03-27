import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    return (
        <div className='w-full bg-zinc-200 flex items-center justify-center mt-4'>
                <div className="mx-auto max-w-md text-center my-4 lg:mx-0 lg:flex-auto lg:py-24 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Boost your productivity.<br />Start using our app today.</h2>
                    <p className="mt-6 text-lg leading-8">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <Link to="/devis" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</Link>
                        <Link to="/contact" className="text-sm font-semibold leading-6">Learn more <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
        </div>
    )
}

export default CtaSection