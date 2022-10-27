import React, {useState, useRef} from 'react'
import DevIcon from 'devicon-react-svg'
import { Switch } from '@headlessui/react'

function Skills(props) {
  const [isOnScreen, setIsOnScreen] = useState(false)
  const [enabled, setEnabled] = useState(false)

  return (
    <div id='skills' ref = { props.skillsContainer } className={`h-fit w-full lg:mx-0 p-4 mb-[200px] text-black flex flex-col rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all duration-700`}>

      <div className='flex self-center mb-2 text-2xl'>Skills</div>
      <div className='flex flex-wrap justify-around p-4 w-full'>
        <DevIcon icon="python" className={`w-20`} />
        <DevIcon icon="react" className={`w-20`} />
        <DevIcon icon="nodejs" className={`w-20`} />
        <DevIcon icon="jquery" className={`w-20`} />
        <DevIcon icon="django" className={`w-20`} />
        <DevIcon icon="github_badge" className={`w-20`} />
        <DevIcon icon="java" className={`w-20`} />
        <DevIcon icon="javascript" className={`w-20`} />
        <DevIcon icon="bootstrap" className={`w-20`} />
        <DevIcon icon="sass" className={`w-20`} />
        <DevIcon icon="css3" className={`w-20`} />
        <DevIcon icon="wordpress" className={`w-20`} />
        <DevIcon icon="npm" className={`w-20`} />
        <DevIcon icon="linux" className={`w-20`} />
        <DevIcon icon="stackoverflow" className={`w-20`} />
        <DevIcon icon="visualstudio" className={`w-20`} />
        <DevIcon icon="heroku" className={`w-20`} />
        <DevIcon icon="postgresql" className={`w-20`} />
        <DevIcon icon="mongodb" className={`w-20`} />
        <DevIcon icon="photoshop" className={`w-20`} />
        <DevIcon icon="sqllite" className={`w-20`} />
        <DevIcon icon="windows" className={`w-20`} />
        <DevIcon icon="apple" className={`w-20`} />
      </div>
      <span className='flex flex-row justify-center'>
      <span className="mr-2 self-center">See More</span>
      <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-color6' : 'bg-color4'
      } relative inline-flex h-9 w-14 items-center rounded-full my-2`}
        >
          <span className="sr-only">Tech Skill</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-7 w-7 transform rounded-full bg-white transition-all`}
      />
      </Switch>
      </span>
       <div className={` ${ enabled ? 'h-fit opacity-100' : 'h-0 opacity-0'} text-color6 w-full flex flex-row flex-wrap gap-4 transition-all ease-in duration-700 overflow-hidden`}>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Python</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>React.js</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Node.js</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Next.js</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>TypeScript</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>jQuery</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Django</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>HTML</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>CSS</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>JavaScript</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Express</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>SQL & NoSQL Databases</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>PostgreSQL</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>MySQL</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>SQLite</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>PyMongo</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>PeeWee</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>MongoDB</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Mongoose</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Flask</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}> MERN / MEN Stacks</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Object Oriented Programming (OOP) </p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Restful Routing</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Bootstrap CSS</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Bulma CSS</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>Tailwind CSS</p>
          <p className={`m-1 p-1 bg-color6/80 rounded-md hover:bg-color5/80 transition-colors text-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>HeadlessUI</p>
        </div>
    </div>
  )
}

export default Skills