import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image';

const Contact = () =>{
    return(
        <div id='contact' className='w-full h-auto bg-gray-800'>
            <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
                <p className='text-3xl px-10 tracking-widest uppercase text-white'>Contact Me</p>
                <div className='gird lg:grid-cols-5 gap-8'>
                </div>
            </div>

            <form>
                <div className='grid md:grid-cols-2 p-10 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase py-2 text-sm text-white'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase py-2 text-sm text-white'>Phone Number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                    </div>
                </div>
                <div className='flex flex-col px-10 py-2'>
                        <label className='uppercase py-2 text-sm text-white'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                </div>
                <div className='flex flex-col px-10 py-2'>
                        <label className='uppercase py-2 text-sm text-white'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                    </div>
                    <div className='flex flex-col px-10 py-2'>
                        <label className='uppercase py-2 text-sm text-white'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10}></textarea>
                </div>
                
                <div className='px-10'>
                    <button className='w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md p-4 mt-4'>Send Message</button>
                </div>
            </form>

            <div className='text-5xl flex justify-center gap-16 py-10 text-white'>
                        <a href = "https://github.com/CaseyMerritt"  target="_blank"><AiFillGithub/></a>
                        <a href = "https://www.youtube.com/channel/UCY2obIB3KYsucwUHBMRWC-w"  target="_blank"><AiFillYoutube/></a>
                        <a href = "https://www.linkedin.com/in/caseymerritt/"  target="_blank"><AiFillLinkedin/></a>
            </div>
        </div>
    )
}

export default Contact