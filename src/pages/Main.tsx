import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image';

const Main = () =>{
    return(
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='text-7xl py-2 text-teal-600 font-medium'>Hi, i'm Casey</h1>
                    <h1 className='text-4xl py-2'>Software Engineer and Computer Science Student</h1>
                    <ul className='items-center py-5'>
                        <li>
                            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href='/public/CaseyMerrittResume.pdf' download>
                                Hire Me
                            </a>
                            <a className='bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-md ml-10' href='/public/CaseyMerrittResume.pdf' download>
                                Resume
                            </a>
                        </li>
                    </ul>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-black'>
                        <a href = "https://github.com/CaseyMerritt"  target="_blank"><AiFillGithub/></a>
                        <a href = "https://www.youtube.com/channel/UCY2obIB3KYsucwUHBMRWC-w"  target="_blank"><AiFillYoutube/></a>
                        <a href = "https://www.linkedin.com/in/caseymerritt/"  target="_blank"><AiFillLinkedin/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main