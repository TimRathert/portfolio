import React, {useState, useRef} from 'react'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
function Skills(props) {
  const [isOnScreen, setIsOnScreen] = useState(false)

  return (
    <div id='skills' ref = { props.skillsContainer } className={`h-fit w-full overflow-x-auto lg:mx-0 p-4 mb-[200px] text-black flex flex-col rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all`}>
      <Parallax
        onEnter={()=>{setIsOnScreen(true)}}
        onExit={()=>{setIsOnScreen(false)}}
      > 
      </Parallax>
      <div className='flex self-center mb-2 text-2xl'>Skills</div>
      <div className='flex justify-around p-4 w-full'>
        <ul className={`transition-all ease-in w-2/6 duration-300 ${isOnScreen ? 'opacity-100' : 'opacity-30'}`}>
          <li>Python</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>jQuery</li>
          <li>Django</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Express</li>
    
        </ul>
        <ul className={`transition-all ease-in w-2/6 duration-500 ${isOnScreen ? 'opacity-100' : 'opacity-30'}`}>
          <li>SQL & NoSQL Databases</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>PyMongo</li>
          <li>PeeWee</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Flask</li>
          <li> MERN / MEN Stacks</li>
          
        </ul>
        <ul className={`transition-all ease-in w-2/6 duration-700 ${isOnScreen ? 'opacity-100' : 'opacity-30'}`}>
          <li>Object Oriented Programming (OOP) </li>
          <li>Restful Routing</li>
          <li>Bootstrap CSS</li>
          <li>Bulma CSS</li>
          <li>Tailwind CSS</li>
          <li>HeadlessUI</li>
          <li></li>
          <li></li>
          
        </ul>
      </div>

    </div>
  )
}

export default Skills