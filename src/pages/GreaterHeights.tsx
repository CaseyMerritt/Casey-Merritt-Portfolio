import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Router from 'next/router'

const GreaterHeights = () =>{
    return(
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:w-[40vh'>
                <div className='absolute fill top-20 left-0 w-full h-[30vh] lg:h-[35vh]'>
                    <img className='absolute z-1 filter blur-sm' src='../../GreaterHeightsAlt.png' alt='/' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 px-10 text-white'>
                        <h2 className='text-3xl'>NASA | Greater Heights</h2>
                        <h3 className='text-lg'>Internship</h3>
                    </div>
                </div>
            </div>

            <div className='mt-40 p-10 max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-2xl text-black'>Project</p>
                    <h2 className='text-3xl text-black' >Overview</h2>
                    <p className='py-2'>
                        "NASA Greater Heights VR" is an innovative virtual reality experience that has been designed by a team of interns at the NASA Armstrong Flight Research Center, under the guidance of Aamod Samuel, 
                        Lead Systems Engineer at the center. The main aim of the project is to demonstrate the Simulation Team's expertise in calculating the dynamics of an aircraft and simulating the experience of 
                        piloting a spaceplane.
                    </p>
                    <p className='py-2'>
                        The VR experience is a story-driven flight simulation intended for public outreach and education. The narrative of the experience is intended to capture the imagination of users and take them on 
                        an immersive journey in the shoes of Neil Armstrong and his famous test flight of NASA’s X-15 aircraft. The user will be able to Pilot the aircraft themselves allowing them to experience the same 
                        thrill Neil Armstrong did from the comfort of the ground.
                    </p> 
                    <p className='py-2'>
                        The development of "NASA Greater Heights VR" has been a complex process that has involved the use of advanced software tools and technologies. The team has used Unity, a popular game development engine, 
                        to create the virtual environment and Oculus Rift, a VR headset, to enable users to experience the simulation. 
                    </p>
                    <p className='py-2'>
                        Beyond its practical applications, "NASA Greater Heights VR" represents a collective effort of the interns who have worked on the project to inspire and engage the next generation of NASA professionals. 
                        By creating a realistic and immersive simulation experience, the team hopes to inspire creativity, innovation, and a passion for space exploration in young people who will be the future of the space industry. 
                    </p>
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Godot</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Unity</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> C#</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Python</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> OpenVR</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> SteamVR</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> OculusVR</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Git</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-10 max-w-[1240px] mx-auto'>
                <div className='py-10 grid lg:grid-cols-1 md:grid-cols-4 gap-8 shadow-xl sahdow-gray-400 rounded-xl p-4'>
                    <div className=''>
                        <h3 className='text-2xl'>Fall 2020</h3>
                        <p>
                            As an intern in the fall of 2020, I was brought on to the Greater Heights team with the task of implementing virtual reality controls across multiple platforms, such as SteamVR, OculusVR, and OpenVR, 
                            using C# programming language in Unity. On top of implementing the VR controls I was also tasked with building the 3D environment from the ground up. This was a challenging and exciting task that 
                            required a strong foundation in both software development and virtual reality technology. During my time as an intern, I was able to gain valuable experience in these areas, as well as in project 
                            management, communication, and teamwork. 
                        </p>
                    </div>
                </div>

                <div className='p-2'/>

                <div className='py-10 grid lg:grid-cols-1 md:grid-cols-4 gap-8 shadow-xl sahdow-gray-400 rounded-xl p-4 bg-gradient-to-r from-cyan-500 to-teal-500'>
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/p0uzZAA9nYI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className='p-2'/>

                <div className='py-10 grid lg:grid-cols-1 md:grid-cols-4 gap-8 shadow-xl sahdow-gray-400 rounded-xl p-4'>
                    <div className=''>
                        <h3 className='text-2xl'>Spring 2021</h3>
                        <p>
                            In the spring of 2021, I was brought back to the project to continue my work and take on new challenges. Specifically, I was tasked with porting my work over to Godot, an open-source game engine 
                            that is rapidly gaining popularity in the industry. This required me to adapt my coding skills to a new environment and develop a deep understanding of the Godot API. Additionally, I was able to 
                            expand on the work I had done in the fall, adding new features and functionality to the virtual reality controls, and enhancing the user experience. 
                        </p>
                    </div>
                </div>

                <div className='p-2'/>
                
                <div className='py-10 grid lg:grid-cols-1 md:grid-cols-4 gap-8 shadow-xl sahdow-gray-400 rounded-xl p-4 bg-gradient-to-r from-cyan-500 to-teal-500'>
                    <img className='fill' src ='/'  alt='Coming Soon'/>
                </div>

                <div className='p-2'/>

                <div className='py-10 grid lg:grid-cols-1 md:grid-cols-4 gap-8 shadow-xl sahdow-gray-400 rounded-xl p-4'>
                    <div className=''>
                        <h3 className='text-2xl'>Experience</h3>
                        <p>
                            Overall, my experience as an intern on this project was incredibly rewarding, as I was able to work on cutting-edge technology and develop skills that will serve me well in my future career. 
                            The opportunity to work with a diverse team of professionals and collaborate on complex problems was invaluable, and I am proud to have been a part of such an exciting project. If you would like to 
                            know more about the project, feel free to download my Abstracts below or visit the article written by NASA. If you have any questions feel free to contact me using the contact section on the homepage or 
                            the email listed in my resume!
                        </p>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='flex justify-center'>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 mt-4 mr-8 rounded-md shadow-xl shadow-gray-400' target='_blank' href='../../Abstracts.pdf' download>
                        Abstracts
                    </a>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 mt-4 rounded-md shadow-xl shadow-gray-400' target='_blank' href='https://www.nasa.gov/centers/armstrong/features/interns-design-interactive-virtual-reality-prototype.html'>
                        Article
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

export default GreaterHeights
