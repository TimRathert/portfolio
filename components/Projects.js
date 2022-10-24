import React from 'react'
import ProjectList from  '../ProjectList.js'
import ProjectCard from './ProjectCard.js'

function Projects() {
    const projCardRender = ProjectList.map((item, index) => {
        let visVarLeft = true
        let visVarRight = true
        if (index === 1){
            let visVarLeft = false
        }
        if (index === ProjectList.length-1){
            let visVarRight = false
        }    
        return (
            <ProjectCard project = { item } visVarLeft = {visVarLeft} visVarRight = {visVarRight} />
        )
    })
    return (
        <div className={` justify-even h-fit w-full overflow-x-auto lg:mx-0 p-4 mb-[200px] text-black flex flex-row rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all`}>
            { projCardRender }
        </div>
    )
}

export default Projects