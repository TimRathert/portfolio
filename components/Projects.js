import React from 'react'
import ProjectList from  '../ProjectList.js'
import ProjectCard from './ProjectCard.js'

function Projects() {
    const projCardRender = ProjectList.map((item, index) => {
        return (
            <ProjectCard key = { index } project = { item } index = { index } />
        )
    })
    return (
        <div id='project-container' className={` justify-even h-fit w-full scroll-pl-8 snap-x overflow-x-auto lg:mx-0 p-4 mb-[200px] text-black flex flex-row md:rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all`}>
            { projCardRender }
        </div>
    )
}

export default Projects