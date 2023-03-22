import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo-1.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="/">
          <img className="w-36 mr-4 object-contain " src={logo} alt="logo" />
          </Link>
          <ul className="hidden md:flex">
            <li className="cursor-pointer link">
              <NavLink
                to="/"
                end
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>


            <li className="cursor-pointer link">
              <NavLink
                to="/about"
                end
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>

                About

              </NavLink>
            </li>
            <li className="cursor-pointer link">
              <NavLink
                to="/service"
                end
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Service
              </NavLink>
            </li>
      
            <li className="cursor-pointer link">
              <NavLink
                to="/contact"
                end
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 items-center">
          <span className="border-none bg-transparent text-black mr-4">FR</span>
          <span className="px-8 py-3">EN</span>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <NavLink
            to="/"
            end
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <NavLink
            to="/about"
            end
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <NavLink
            to="/service"
            end
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Service
          </NavLink>
        </li>
      
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <NavLink
            to="/contact"
            end
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="flex flex-col my-4">
          <span className="bg-transparent px-8 py-3 mb-4">
            FR
          </span>
          <span className="px-8 py-3">
            EN
          </span>
        </li>

      </ul>
    </div>
  );
};
