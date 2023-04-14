import React from 'react'
import Router from 'next/router'
import {RiRadioButtonFill} from 'react-icons/ri'

const Splittr = () =>{
    return(
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:w-[40vh'>
                <div className='absolute fill top-20 left-0 w-full h-[30vh] lg:h-[35vh]'>
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
                    <p className='py-2'>
                    Splittr, is a bill splitting app designed to help groups of friends easily split expenses and keep track of who owes what. The app was built using Kotlin and Android Studio. The Github containing the source code is linked below if you're interested in checking it out!
                    </p> 
                    <p className='py-2'>
                    Splittr was created to solve a common problem that I often faced with my friends when we went out to eat or shared expenses for other activities. It can be frustrating and time-consuming to calculate who owes what, especially if the group is large or if the expenses are complex. Splittr makes it easy for everyone in the group to input their share of the expenses, calculate who owes what, and even send reminders to those who need to pay their share. 
                    </p> 
                    <p className='py-2'>
                    One of the key features of Splittr is its user-friendly interface, which is designed to be intuitive and easy to use. The app uses a simple layout that allows users to input expenses quickly and efficiently, and it automatically calculates who owes what based on the inputs provided. Users can also split expenses unevenly, add notes to expenses.
                    </p> 
                    <p className='py-2'>
                    In terms of the technical side of things, I built Splittr using Kotlin and Android Studio, and I used a variety of libraries and tools to make the app functional and responsive. I also made sure to optimize the app for performance and usability, taking into account the different screen sizes and resolutions of modern Android devices. 
                    </p> 
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
            </div>


            <div className='p-10 max-w-[1240px] mx-auto'>

                <div className='w-full overflow-hidden aspect-w-16 aspect-h-9 py-10 shadow-xl sahdow-gray-400 rounded-xl p-4 bg-gradient-to-r from-cyan-500 to-teal-500'>
                    <iframe
                        className="w-full"
                        width={960}
                        height={540}
                        src="https://www.youtube.com/embed/twUzwjjBxcw" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen> 
                    </iframe>
                </div>

                <div className='p-2'/>
            </div>

            <div className=''>
                <div className='flex justify-center'>
                    <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-2 mt-4 mr-8 rounded-md shadow-xl shadow-gray-400' target='_blank' href='https://github.com/CaseyMerritt/Splittr'>
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

export default Splittr