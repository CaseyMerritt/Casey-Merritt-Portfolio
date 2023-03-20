import React from 'react'

const Main = () =>{
    return(
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='text-7xl py-2 text-teal-500 font-medium'>Hi, i'm Casey</h1>
                    <h1 className='text-4xl py-2 text-gray-800'>Software Engineer and Computer Science Student</h1>
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
                </div>
            </div>
        </div>
    )
}

export default Main