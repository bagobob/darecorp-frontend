import React from "react";
import contactImg from "../assets/contact-img.svg";

const GetInTouch = () => {
  return (
    <div name="contact" className="w-full bg-zinc-200 flex flex-col justify-between p-0">
      <div className="grid md:grid-cols-2 max-w-[1024px] m-auto">
        <div>
            <img src={contactImg} alt="contactImg" className="w-[92%]" />
        </div>
        <div>
        <h2 className="font-bold text-[45px] mb-[30px]">Get In Touch</h2>
            <form>
                <div className="grid md:grid-cols-2 max-w-[1024px] m-auto">
                    <div className="mr-2">
                        <input type="text" placeholder="First Name" className='w-[100%] py-4 px-6 mr-4 rounded-md mb-4 outline-none' />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" className='w-[100%] py-4 px-6 mr-4 rounded-md mb-4 outline-none' />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 max-w-[1024px] m-auto">
                    <div className="mr-2">
                        <input type="email" placeholder="Email" className='w-[100%] py-4 px-6 mr-4 rounded-md mb-4 outline-none' />
                    </div>
                    <div>
                        <input type="tel" placeholder="Phone No" className='w-[100%] py-4 px-6 mr-4 rounded-md mb-4 outline-none' />
                    </div>
                </div>
                <div>
                    <textarea placeholder="Message" rows={6} className='w-[100%] py-4 px-6 mr-4 rounded-md mb-4 outline-none'></textarea>
                    <button className='py-3 px-6 sm:w-[100%] my-4'>Send</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
