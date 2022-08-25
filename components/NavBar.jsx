import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import {AiOutlineMenu} from 'react-icon/ai';
const NavBar = () => {
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
                </div>
                <div>
                    {/* <AiOutlineMenu></AiOutlineMenu> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar
