import React from 'react'
import Image from 'next/image'

function ProjectCard(props) {
    const techList = props.project.tech.map((item, index)=>{
        return (
            <div key={index} className={`m-1 p-1 bg-color5/50`}>{ item }</div>
        )
    })
  return (
        <a href={props.project.link} target="_blank" rel='noreferrer ' className={`mx-8 p-2 rounded-lg flex flex-col items-center gap-2 bg-color4 text-white w-4/5 lg:w-3/5 min-w-[80%] md:min-w-[60%] lg:min-w-[50%] shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>
            <div className='text-xl'>{props.project.name}</div>
            <Image objectFit='cover' src={props.project.image} width='400px' height='400px' className='' />
            <div className='bg-color6/80 p-2 rounded-lg shadow-[2px_2px_5px_rgba(0,0,0,0.2)]'>{props.project.description}</div>
            <div className={`flex flex-row flex-wrap`}>{techList}</div>

        </a>
  )
}

export default ProjectCard