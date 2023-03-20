import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillMail, AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    return(
        <div className='fixed w-full h-20 shadow-xl z-[100] bg-gray-800'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px16'>
                <h1 className='text-xl px-5 py-5 text-white'>Lauren is really hot</h1>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href= '/'>
                            <li className='text-xl px-5 py-5 text-white'></li>
                        </Link>
                        <Link href= '/'>
                            <li className='text-xl px-5 py-5 text-white'></li>
                        </Link>
                        <Link href= '/'>
                            <li className='text-xl px-5 py-5 text-white'></li>
                        </Link>
                        <Link href= '/'>
                            <li className='text-xl px-5 py-5 text-white'></li>
                        </Link>
                        <Link href= '/'>
                            <li className='text-xl px-5 py-5 text-white'></li>
                        </Link>
                    </ul>
                    
                    <div onClick={handleNav} className='md:hidden text-white'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' 
                : 'fixed left-[-125%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/' width='87' height='35' alt='/' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[86%] md:w-[90%] py-4'>Lauren is so cute I cant even</p>
                        </div>
                    </div>

                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>

                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-teal-500'>Let's Connect</p>
                            <div className='text-5xl flex justify-left gap-5 py-3 text-black'>
                                <a href = "https://github.com/CaseyMerritt"  target="_blank">
                                    <AiFillGithub className='hover:scale-110 ease-in duration-200'></AiFillGithub>
                                </a>
                                <a href = "https://www.youtube.com/channel/UCY2obIB3KYsucwUHBMRWC-w"  target="_blank">
                                    <AiFillYoutube className='hover:scale-110 ease-in duration-200'></AiFillYoutube>
                                </a>
                                <a href = "https://www.linkedin.com/in/caseymerritt/"  target="_blank">
                                    <AiFillLinkedin className='hover:scale-110 ease-in duration-200'></AiFillLinkedin>
                                </a>
                                <a href = "">
                                    <AiFillMail className='hover:scale-110 ease-in duration-200'></AiFillMail>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;