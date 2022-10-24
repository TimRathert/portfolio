import React from 'react'
import Image from 'next/image'

function ProjectCard(props) {
  return (
    <div className={`mx-8 p-2 rounded-lg flex flex-col items-center gap-2 bg-color4 text-white w-4/5 lg:w-3/5 min-w-[80%] md:min-w-[60%] lg:min-w-[50%]`}>
        <div className='text-xl'>{props.project.name}</div>
        <Image layout='responsive' src={props.project.image} width='400px' height='400px' className='' />
        <div className='bg-color5/40 p-2 rounded-lg'>{props.project.description}</div>
        <div>{props.project.tech}</div>

    </div>
  )
}

export default ProjectCard