import React from 'react';
import "../scroll.css";

const Scroll = () => {

    return (
        <div className="hidden md:flex justify-center cursor-pointer"
            onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }}>
            <div className="mouse">
                <div className="wheel"></div>
            </div>
        </div>
    )
}

export default Scroll