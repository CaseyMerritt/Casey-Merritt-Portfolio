import React from 'react'
import Router from 'next/router'
import {RiRadioButtonFill} from 'react-icons/ri'

const Splittr = () =>{
    return(
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:w-[40vh'>
                <div className='absolute fill top-20 left-0 w-full h-[30vh] lg:h-[40vh]'>
                    <img className='absolute z-1 filter blur-sm' src='../../Splittr.png' alt='/' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 px-10 text-black'>
                        <h2 className='text-3xl'>Splittr</h2>
                        <h3 className='text-lg'>Android Studio / Kotlin</h3>
                    </div>
                </div>
            </div>

            <div className='mt-40 p-10 max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-2xl text-black'>Project</p>
                    <h2 className='text-3xl text-black' >Overview</h2>
                    <p>As a computer science student, my passion for software engineering and development stems from my love for video games. In high school, I taught myself to code using C# and Unity in order to create my own video games. This led me to explore the different aspects of software engineering, such as game development, virtual reality, and mobile applications. My passion for creating immersive and engaging experiences has motivated me to pursue a career in software engineering, where I can continue to develop cutting-edge technology that brings people together.</p> 
                    <div className='py-5'>
                        <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 mt-4 mr-8 rounded-md shadow-xl shadow-gray-400' href='/'>
                            Abstracts
                        </a>
                        <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 mt-4 rounded-md shadow-xl shadow-gray-400' href='/'>
                            Article
                        </a>
                    </div>
                    
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Android Studio</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Kotlin</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Figma</p>
                        </div>
                    </div>
                </div>

                <div>
                    <button className='underline' type="button" onClick={() => Router.back()}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default Splittr