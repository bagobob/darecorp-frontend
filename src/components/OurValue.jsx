import React from 'react';
import { FaHeart, FaStar, FaThumbsUp } from 'react-icons/fa';

const OurValue = () => {
    return (
        <div name="platform" className="w-full mb-32 bg-zinc-200">
        <div className="max-w-[1240px] mx-auto px-2">
          <h2 className="text-5xl font-bold text-center py-16">Our Values</h2>
          
  
          <div className="grid lg:grid-cols-3 gap-4 pt-4">
  
            <div className="flex flex-col items-center">
              <div className='py-4'>
              <FaHeart className="text-2xl text-red-500 mb-2" />
              </div>
              <div className="">
                <h3 className="font-bold text-lg text-center">Co-construction</h3>
                <p className="text-medium md:text-lg pt-2 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className='py-4'>
              <FaStar className="text-2xl text-yellow-500 mb-2"  width={10} height={10}/>
              </div>
              <div className="">
                <h3 className="font-bold text-lg text-center">Engagement</h3>
                <p className="text-medium md:text-lg pt-2 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className='py-4'>
              <FaThumbsUp className="text-2xl text-green-500 mb-2" />
              </div>
              <div className="">
                <h3 className="font-bold text-lg text-center">Performance</h3>
                <p className="text-medium md:text-lg pt-2 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurValue;
