import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image';

const Contact = () =>{
    return(
        <div id='contact' className='w-full items-center py-16 bg-gray-800'>
            <div className='max-w-[1240] m-auto'>
                <div className='text-center p-10'>
                    <h2 className='text-3xl py-1 text-white'>Contact Me</h2>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-white'>
                        <a href = "https://github.com/CaseyMerritt"  target="_blank"><AiFillGithub/></a>
                        <a href = "https://www.youtube.com/channel/UCY2obIB3KYsucwUHBMRWC-w"  target="_blank"><AiFillYoutube/></a>
                        <a href = "https://www.linkedin.com/in/caseymerritt/"  target="_blank"><AiFillLinkedin/></a>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Contact