import React from 'react'
import Image from 'next/image'


function ProjectCard(props) {
    const techList = props.project.tech.map((item, index)=>{
        return (
            <div key={index} className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors`}>{ item }</div>
        )
    })
  return (
        <div key ={ props.index } className={`select-none snap-start mx-8 p-2 rounded-lg flex flex-col items-center gap-2 bg-color4 text-white w-4/5 lg:w-3/5 min-w-[80%] md:min-w-[60%] lg:min-w-[50%] shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>
            <div className='text-xl'>{props.project.name}</div>
            <a href={props.project.link} target="_blank" rel='noreferrer' ><Image objectFit='cover' src={props.project.image} width='400px' height='400px' className='shadow-[2px_2px_5px_rgba(0,0,0,0.2)]' alt="Project Screenshot" /></a>
            <div className=' md:w-5/6 bg-color6/80 p-2 rounded-lg shadow-[2px_2px_5px_rgba(0,0,0,0.2)]'>{props.project.description}</div>
            <div className={` md:w-5/6 flex flex-row flex-wrap`}>{techList}</div>
            <div className={`m-1 p-1 bg-color1/50 p-1 rounded-md hover:bg-color5/80 transition-colors`}><a href={props.project.github} target="_blank" rel='noreferrer' >Repo Link</a></div>

        </div>
  )
}

export default ProjectCard