import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
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
                    
                    <div className='md:hidden text-white'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className=''>
                
            </div>

        </div>
    )
}

export default Navbar;