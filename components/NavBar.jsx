import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(()=>{
    const handleShadow = () =>{
      if(window.scrollY >= 90){
        setShadow(true)
      } else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  });

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          className=""
          src="/assets/ck_logo_final.png"
          alt="logo"
          width="160"
          height="160"
        />
        <ul className="hidden md:flex">
          <Link href="/#main">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/#story">
            <li className="ml-10 text-sm uppercase hover:border-b">
              Our Story
            </li>
          </Link>
          <Link href="/#wedding">
            <li className="ml-10 text-sm uppercase hover:border-b">Wedding</li>
          </Link>
          <Link href="/#navigation">
            <li className="ml-10 text-sm uppercase hover:border-b">
              Getting There
            </li>
          </Link>
          <Link href="/#regards">
            <li className="ml-10 text-sm uppercase hover:border-b">Regards</li>
          </Link>
        </ul>
        <div className="md:hidden">
          <AiOutlineMenu size={25} onClick={() => setIsSideMenuOpen(true)} />
        </div>
      </div>
      <div
        className={
          isSideMenuOpen ? "fixed top-0 left-0 w-full h-screen bg-back/70" : ""
        }
      >
        <div
          className={
            isSideMenuOpen
              ? "fixed md:hidden top-0 left-o w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e79e9e] p-5 ease-in duration-500"
              : "fixed top-0 left-[100%] p-10 ease-out duration-500"
          }
        >
          <div className="flex w-full item-center justify-between">
            <Image
              className=""
              src="/assets/ck_logo_final.png"
              alt="logo"
              width="160"
              height="160"
            />
            <div className="h-[50px] rounded-full shadow-lg p-3 shadow-gray-700 cursor-pointer">
              <AiOutlineClose
                size={25}
                onClick={() => setIsSideMenuOpen(false)}
              />
            </div>
          </div>
          <div className="border-b border-gray-300 my-2">
            <p className="py-2">Kamakshee Weds Chaitanya</p>
          </div>
          <div className="flex py-4 flex-col">
            <ul className="uppercase">
              <Link href="/#main">
                <li onClick={()=>setIsSideMenuOpen(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#story">
                <li onClick={()=>setIsSideMenuOpen(false)} className="py-4 text-sm">Our Story</li>
              </Link>
              <Link href="/#wedding">
                <li onClick={()=>setIsSideMenuOpen(false)} className="py-4 text-sm">Wedding</li>
              </Link>
              <Link href="/#navigation">
                <li onClick={()=>setIsSideMenuOpen(false)} className="py-4 text-sm">Getting there</li>
              </Link>
              <Link href="/#regards">
                <li onClick={()=>setIsSideMenuOpen(false)} className="py-4 text-sm">Regards</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
