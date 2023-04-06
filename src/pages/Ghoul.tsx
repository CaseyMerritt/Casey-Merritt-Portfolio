import React from 'react'
import Router from 'next/router'
import {RiRadioButtonFill} from 'react-icons/ri'

const Ghoul = () =>{
    return(
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:w-[40vh'>
                <div className='absolute fill top-20 left-0 w-full h-[30vh] lg:h-[35vh]'>
                    <img className='absolute z-1 filter blur-sm' src='../../Ghoul.JPG' alt='/' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 px-10 text-white'>
                        <h2 className='text-3xl'>Ghoul</h2>
                        <h3 className='text-lg'>Unity / C#</h3>
                    </div>
                </div>
            </div>

            
            <div className='mt-40 p-10 max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-2xl text-black'>Project</p>
                    <h2 className='text-3xl text-black' >Overview</h2>
                    <p className='py-2'>
                        I'm currently working on a passion project called Ghoul, a 2D Platformer. Although the game is still in development, I've included some samples on my website for anyone reading this to check out!
                    </p> 
                    <p className='py-2'>
                    Ghoul is a game that I've been working on in my free time as a way to explore my passion for game development and to challenge myself to build something that is fun, engaging, and visually appealing. 
                    The game is set in a spooky and mysterious sci-fi world. It challenges players to navigate a series of increasingly difficult levels using a combination of jumping, running, and fighting.
                    </p> 
                    <p className='py-2'>
                    In terms of the technical side of things, I've used Unity and C# to build the game mechanics and gameplay systems, including the physics engine, collision detection, and enemy AI. I've also implemented a 
                    variety of power-ups and upgrades to give players more options and to keep the gameplay fresh and engaging. 
                    </p> 
                    <p className='py-2'>
                    While Ghoul is still a work in progress, I'm excited about the potential it has and I'm looking for opportunities to work on similar projects in the future. I believe that my experience building Ghoul has 
                    given me a strong foundation in game development, and I'm eager to continue exploring this field and building my skills.
                    </p> 
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Unity</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> C#</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Photoshop</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> AESprite</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> After Effects</p>
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
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 mt-4 rounded-md shadow-xl shadow-gray-400' target='_blank' href='/'>
                        Itch.io
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

export default Ghoul