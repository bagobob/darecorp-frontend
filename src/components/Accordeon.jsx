import React from 'react';
import webDev from "../assets/web_dev.png";
import "../accordeon.css";

const Accordeon = () => {

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');

            // Close all accordion panels
            accordionHeaders.forEach(header => {
                header.parentElement.classList.remove('active');
            });

            // Open the clicked accordion panel
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
    return (
        <div className='w-full'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div>
                    <img src={webDev} alt='web_development' />
                </div>

                <div className="w-full max-w-md mx-auto">
                    <div className="accordion">
                        {/* <!-- Menu 1 --> */}
                        <div className="accordion-item border-b border-gray-200">
                            <h2 className="accordion-header">
                                <button className="accordion-trigger">
                                    Menu 1
                                </button>
                            </h2>
                            <div className="accordion-panel">
                                <p className="py-2">Content for menu 1 goes here.</p>
                            </div>
                        </div>

                        {/* <!-- Menu 2 --> */}
                        <div className="accordion-item border-b border-gray-200">
                            <h2 className="accordion-header">
                                <button className="accordion-trigger">
                                    Menu 2
                                </button>
                            </h2>
                            <div className="accordion-panel">
                                <p className="py-2">Content for menu 2 goes here.</p>
                            </div>
                        </div>

                        {/* <!-- Menu 3 --> */}
                        <div className="accordion-item border-b border-gray-200">
                            <h2 className="accordion-header">
                                <button className="accordion-trigger">
                                    Menu 3
                                </button>
                            </h2>
                            <div className="accordion-panel">
                                <p className="py-2">Content for menu 3 goes here.</p>
                            </div>
                        </div>

                        {/* <!-- Menu 4 --> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-trigger">
                                    Menu 4
                                </button>
                            </h2>
                            <div className="accordion-panel">
                                <p className="py-2">Content for menu 4 goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Accordeon