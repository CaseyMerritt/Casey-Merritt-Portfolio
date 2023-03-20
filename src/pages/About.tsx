import React, { lazy } from 'react'
import Image from 'next/image';

const About = () =>{
    return(
        <div className='w-full flex items-center py-16 bg-gradient-to-r from-cyan-500 to-teal-500'>
            <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h2 className='text-3xl px-10 uppercase tracking-widest text-white'>About Me</h2>
                    <p className='text-md px-10 py-2 leading-8 text-white'>
                        Computer Science Student Currently looking for a dynamic and challenging oppurtunity to expand my large pool of knowledge and challenge my skills.
                    </p>
                    <p className='text-md px-10 py-2 leading-8 text-white'>Lauren is literally the best</p>
                 </div>
                 <div className=''>
                     <Image className='m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-200' src='../../ProfilePic.jpg' width={324} height={432} alt='not found' loading='lazy'></Image>
                 </div>
            </div>
        </div>
    )
}

export default About
