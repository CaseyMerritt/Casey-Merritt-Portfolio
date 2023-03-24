import React from 'react'

const Main = () =>{
    return(
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='text-7xl py-2 text-teal-500 font-medium'>Hi, i'm Casey</h1>
                    <h1 className='text-4xl py-2 text-gray-800'>Software Engineer and Computer Science Student</h1>
                    <div className='flex justify-center py-5 gap-10'>
                        <div className='hover:scale-105 ease-in duration-200'>
                            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href='/#contact'>
                                Hire Me
                            </a>
                        </div>
                        <div className='hover:scale-105 ease-in duration-200'>
                            <a className='bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-md' href='../../Casey_Merritt_Resume.pdf' target='_blank' download>
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main