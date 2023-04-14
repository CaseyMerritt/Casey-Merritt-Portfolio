import React from 'react'
import Image from 'next/image'

const Skills = () =>{
    return(
        <div id='skills' className='w-full md:h-screen p-2'>
            <div className='max-w-[1240] mx-auto flex flex-col justify-center h-full'>
                <h2 className='text-3xl px-10 tracking-widest uppercase text-black'>Skills</h2>
                <div className='grid md:grid-cols-2 lg:gird-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../Html.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../Css.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../Next.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>NEXT.JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../Tailwind.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>TailWind</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../JavaScript.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../Java.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>Java</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../cpp.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>C++</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={'../../Python.png'} width={64} height={64} alt={'/'}></Image>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-xl font-bold'>Python</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills