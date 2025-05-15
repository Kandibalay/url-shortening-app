"use client";
import Image from "next/image";
import Logo from "..//../public/images/logo.svg";
import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);


  const closeMenubar = () => {
    setMenuOpen(false)
}
const openMenubar = () =>{
    if (window.innerWidth < 1024) { // Check if the screen width is less than 1024px (mobile devices)
        setMenuOpen(!menuOpen);
      }
}
const handleClickOutside = (event) => {
    if(navRef.current && !navRef.current.contains(event.target)){
        closeMenubar()
    }
}

useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenubar();
      }
    };
  
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);
  



  return (
    <div className='fixed left-0 right-0 z-50  bg-white container mx-auto py-5 lg:py-0'>
      <div className="flex px-6 md:px-14 lg:px-20 text-[15px] gap-10 items-center justify-between text-[#9e9aa7] font-semibold ">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-full"
          />
        </Link>
        <div
          className="lg:hidden flex text-2xl cursor-pointer" 
          onClick={openMenubar}
        >
          {menuOpen ? (
            <IoCloseOutline className="text-[#bfbfbf] text-right" />
          ) : (
            <RxHamburgerMenu className="text-[#bfbfbf] text-right" />
          )}
        </div>

        <div className={`lg:static absolute top-56 ${
            menuOpen ? 'block opacity-100 w-[88%] bg-[#35323e] left-1/2 transform -translate-x-1/2 -translate-y-1/2  gap-2 p-8 rounded-lg ' : 'hidden opacity-0 top-[100%]'
            } lg:opacity-100 lg:flex lg:items-center lg:justify-between lg:w-full font-bold z-50 gap-5`} 
        >
          <div className='flex flex-col lg:flex-row' ref={navRef}>
            <ul className="flex flex-col lg:flex-row gap-7 items-center">
              <Link href="/"  onClick={()=> {closeMenubar() }}>
                <li className="hover:text-[#232127] active:text-[#232127]">Features</li>
              </Link>
              <Link href="/" onClick={()=> {closeMenubar() }}>
                <li className="hover:text-[#232127] active:text-[#232127]">Pricing</li>
              </Link>
              <Link href="/" onClick={()=> {closeMenubar() }}>
                <li className="hover:text-[#232127] active:text-[#232127]">Resources</li>
              </Link>
            </ul>
          </div>

          <div className="flex  items-center justify-center gap-5 w-full lg:w-[30%] py-5">
            <ul className="flex flex-col justify-between lg:flex-row w-full gap-5 items-center">
              <Link href="/" onClick={()=> {closeMenubar() }} className="lg:w-[50%]" >
                <li className="text-center hover:text-[#232127] active:text-[#232127]">Login</li>
              </Link>
              <Link href="/" onClick={()=> {closeMenubar() }} className="w-full lg:w-[50%] ">
                <button className="bg-[#2acfcf] text-white w-full py-2 rounded-full cursor-pointer hover:bg-[#9be3e3] transition duration-300 ease-in-out">
                  Sign Up
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
