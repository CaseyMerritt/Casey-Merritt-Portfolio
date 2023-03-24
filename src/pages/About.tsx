import React, { lazy } from 'react'
import Image from 'next/image';

const About = () =>{
    return(
        <div id='about' className='w-full md:h-screen flex items-center py-16 bg-gradient-to-r from-cyan-500 to-teal-500'>
            <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h2 className='text-3xl px-10 uppercase tracking-widest text-white'>About Me</h2>
                    <p className='text-md px-10 py-2 leading-8 text-white'>
                    As a computer science student, my passion for software engineering and development stems from my love for video games. In high school, I taught myself to code using C# and Unity in order to create my own video games. This led me to explore the different aspects of software engineering, such as game development, virtual reality, and mobile applications. My passion for creating immersive and engaging experiences has motivated me to pursue a career in software engineering, where I can continue to develop cutting-edge technology that brings people together.
                    </p>
                    <p className='text-md px-10 py-2 leading-8 text-white'>
                    Currently I am a senior at Cal Poly Pomona slated to graduate in December of 2023. During my time at college I have gained a large breadth of knowledge by taking a wide variety of classes from almost every aspect of software development. This includes courses in computer graphics, computer architecture, artificial intelligence, networks and algorithms, among others. These classes have given me a solid foundation in the core principles of computer science, as well as practical experience in developing software applications. I have also had the opportunity to work for NASA as an intern as well as participate in several group projects, where I have learned the importance of effective communication, teamwork, and time management. If you would like to know more about my previous work experience and the individual projects head down to the project section of this web page where I go into the specifics of each. 
                    </p>
                    <p className='text-md px-10 py-2 leading-8 text-white'>
                    As I look towards the future, I plan to pursue my Master's degree in the fall of 2024, where I hope to deepen my understanding of the field and contribute to groundbreaking research in software development; However, I am currently looking for an opportunity to gain more practical experience and contribute to cutting-edge technology while preparing for my graduate studies. I excel in challenging and dynamic work environments that allow me to apply my vast set of skills and  provide me with the opportunity to further develop my skills and gain new and exciting knowledge!
                    </p>
                 </div>
                 <div className=''>
                     <Image className='m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-200' src='../../ProfilePic.jpg' width={324} height={432} alt='not found' loading='lazy'></Image>
                 </div>
            </div>
        </div>
    )
}

export default About
