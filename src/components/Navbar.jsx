import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Icon from "../helper/Icons";
import logo from "../assets/logo.png"
// import logo from "../assets/EarlyWages.png"
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className="w-full bg-white text-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-[98%] mx-auto px-2 md:px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <HashLink smooth to="/#" className="text-2xl font-bold text-primary italic">
          {/* Verified<span className="text-black">U</span> */}
          <img className="w-[200px]" src={logo} alt="Earlywages" />
        </HashLink>

        {/* DESKTOP MENU */}
        {/* className={({ isActive }) =>`${isActive ? "text-primary block" : "block"}`} */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="hover:text-primary text-black cursor-pointer"><HashLink smooth className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#" >Home</HashLink></li>
          <li className="hover:text-primary text-black cursor-pointer"><HashLink smooth className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#about" >About Us</HashLink></li>
          <li className="hover:text-primary text-black cursor-pointer"><HashLink smooth className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#faq" >FAQ</HashLink></li>
          <li className="hover:text-primary text-black cursor-pointer"><HashLink smooth className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#contact" >Contact</HashLink></li>

          <a href="https://apps.earlywages.in" target="_blank" className="bg-primary px-5 py-2 rounded-lg font-semibold hover:bg-primary transition">
            Get Loan
          </a>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Icon name={!open ? "MdMenu" : "MdOutlineMenuOpen"} color="black" size="40" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4">
          <p className="hover:text-primary"><HashLink smooth onClick={()=> setOpen(!open)} className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#" >Home</HashLink></p>
          <p className="hover:text-primary"><HashLink smooth onClick={()=> setOpen(!open)} className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#about" >About Us</HashLink></p>
          <p className="hover:text-primary"><HashLink smooth onClick={()=> setOpen(!open)} className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#faq" >FAQ</HashLink></p>
          <p className="hover:text-primary"><HashLink smooth onClick={()=> setOpen(!open)} className={({isActive}) => `${isActive && "text-primary font-semibold"}`} to="/#contact" >Contact</HashLink></p>
          <button 
            className="w-full bg-primary py-2 rounded-lg"
            onClick={()=> window.open("https://apps.earlywages.in")}
            >
            Get Loan
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
