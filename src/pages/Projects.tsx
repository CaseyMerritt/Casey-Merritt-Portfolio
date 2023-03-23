import React from 'react'
import ProjectItem from './ProjectItem';

const Projects = () =>{
    return(
        <div id='projects' className='w-full'>
            <div className='max-w-[1240] mx-auto px-2 py-16'>
                <h2 className='text-3xl px-10 tracking-widest uppercase text-black'>Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='NASA | Greater Heights' backgroundImg={'../../GreaterHeightsRevision.png'} projectUrl='/' description={'Godot and Python'}/>
                    <ProjectItem title='Graphix' backgroundImg={'../../Graphix.png'} projectUrl='/' description={'Java and Processing 3.4'}/>
                    <ProjectItem title='Splittr' backgroundImg={'../../Splittr.png'} projectUrl='/' description={'Android Studio and Kotlin'}/>
                    <ProjectItem title='Ghoul' backgroundImg={'../../GhoulRevision.png'} projectUrl='/' description={'Unity and C#'}/>

                </div>
            </div>
        </div>
    )
}

export default Projects
