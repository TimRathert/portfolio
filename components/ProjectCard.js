import React from 'react'

function ProjectCard(props) {
  return (
    <div className={`w-4/5 lg:w-2/5 min-w-[80%] md:min-w-[60%] lg:min-w-[40%]`}>
        <h2>{props.project.name}</h2>
        <div>{props.project.description}</div>
        <div>{props.project.tech}</div>

    </div>
  )
}

export default ProjectCard