import React from 'react'
import ProjectList from  '../ProjectList.js'
import ProjectCard from './ProjectCard.js'

function Projects() {
    const projCardRender = ProjectList.map((item, index) => {    
        return (
            <ProjectCard project = { item } />
        )
    })
    return (
        <div className={` justify-even h-fit w-full overflow-x-auto lg:mx-0 p-4 mb-[200px] text-black flex flex-row rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all`}>
            { projCardRender }
        </div>
    )
}

export default Projects