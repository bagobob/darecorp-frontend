import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {Link} from 'react-scroll';
import logo from "../assets/logo-1.png";

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav);
    }  

    const handleClose =() => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* <h1 className="text-3xl font-bold mr-4 sm:text-4xl">DARKCORP.</h1> */}
          <img className="w-36 mr-4 object-contain "  src={logo} alt="logo"/>
          <ul className="hidden md:flex">
          <li className="cursor-pointer"><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
          <li className="cursor-pointer"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className="cursor-pointer"><Link activeClass="active" to="service" spy={true} smooth={true} offset={-50} duration={500}>Service</Link></li>
          <li className="cursor-pointer"><Link activeClass="active" to="platform" spy={true} smooth={true} offset={-100} duration={500}>Platform</Link></li>
          <li className="cursor-pointer"><Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={500}>Pricing</Link></li>
          <li className="cursor-pointer"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link></li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} activeClass="active" to="service" spy={true} smooth={true} offset={-50} duration={500}>Service</Link></li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} activeClass="active" to="platform" spy={true} smooth={true} offset={-100} duration={500}>Platform</Link></li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={500}>Pricing</Link></li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer"><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
        <li className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
            <button className="px-8 py-3">Sign Up</button>
        </li>
      </ul>
      
    </div>
  );
};
