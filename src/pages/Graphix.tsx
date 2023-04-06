import React from 'react'
import Router from 'next/router'
import {RiRadioButtonFill} from 'react-icons/ri'

const Graphix = () =>{
    return(
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:w-[40vh'>
                <div className='absolute fill top-20 left-0 w-full h-[30vh] lg:h-[35vh]'>
                    <img className='absolute z-1 filter blur-sm' src='../../Graphix.png' alt='/' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 px-10 text-white'>
                        <h2 className='text-3xl'>Graphix</h2>
                        <h3 className='text-lg'>Ray Tracing / Processing 3.4</h3>
                    </div>
                </div>
            </div>

            <div className='mt-40 p-10 max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-2xl text-black'>Project</p>
                    <h2 className='text-3xl text-black' >Overview</h2>
                    <p className='py-2'>
                        ‘Graphix’ is a ray traced image renderer built using Processing 3.4, an open-source programming language and environment designed for artists, designers, and educators. ‘Graphix’ is designed to showcase
                         a variety of advanced features and techniques, including reflections, refractions, shadows, and global illumination. It uses a combination of algorithms and data structures to simulate the behavior of 
                         light as it interacts with different materials and surfaces, creating a realistic and immersive virtual environment. 
                    </p>
                    <p className='py-2'>
                    In summary, Graphix was a challenging and complex project that required a deep understanding of mathematics, computer graphics, and programming, which really put my skills to the test. The project is not in
                     its final form just yet though. I am currently in the process of converting it to C++ and optimizing the code using CUDA and GPU accelerated computation to increase the efficiency and fidelity as well as
                      decrease rendering time. If you would like to take a closer look, sample renders and the github containing the source code are shown below!
                    </p>

                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Java</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Processing 3.4</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Ray Tracing</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-10 max-w-[1240px] mx-auto'>
                <div className='py-10 grid lg:grid-cols-2 md:grid-cols-4 gap-8 shadow-xl sahdow-gray-400 rounded-xl p-4'>
                    <img className='fill' src ='/'  alt='Coming Soon'/>
                    <img className='fill' src ='/'  alt='Coming Soon'/>
                </div>

                <div className='p-2'/>

                <div className='py-10 grid lg:grid-cols-2 md:grid-cols-4 gap-8 shadow-xl sahdow-gray-400 rounded-xl p-4 bg-gradient-to-r from-cyan-500 to-teal-500'>
                    <img className='fill' src ='/'  alt='Coming Soon'/>
                    <img className='fill' src ='/'  alt='Coming Soon'/>
                </div>

                <div className='p-2'/>
            </div>

            <div className=''>
                <div className='flex justify-center'>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 mt-4 mr-8 rounded-md shadow-xl shadow-gray-400' target='_blank' href='https://github.com/CaseyMerritt/Graphix'>
                            Github
                    </a>
                </div>
            </div>

            <div className='p-5'></div>

            <div className='absolute max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] z-10 py-5 px-10'>
                    <button className='underline' type="button" onClick={() => Router.back()}>Back</button>
            </div>
        </div>
    )
}

export default Graphix