import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    const {isSideMenuOpen, setSideMenuOpen} = useState();
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image className="" src="/assets/logo.png" alt="logo"  width="200" height="200"/>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Our Story</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Wedding</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Getting There</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">RSVP</li>
                        </Link>
                    </ul>
                    <div className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
                <div className="fixed top-0 left-0 w-full h-screen bg-back/70">
                    <div className="fixed top-0 left-o w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e79e9e] p-10 ease-in duration-500">
                        <div className="flex w-full item-center justify-between">
                            <Image className="" src="/assets/logo.png" alt="logo"  width="200" height="200"/>
                            <div className="rounded-full shadow-lg p-3 h-40 shadow-gray-700 cursor-pointer">
                                <AiOutlineMenu size={25}/>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">okokokok</p>
                        </div>
                        <div className="flex py-4 flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li className="py-4 text-sm">Home</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Our Story</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Wedding</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Getting there</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">RSVP</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar
