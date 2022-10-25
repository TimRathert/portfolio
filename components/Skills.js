import React, {useState, useRef} from 'react'
import DevIcon from 'devicon-react-svg'
import { Switch } from '@headlessui/react'

function Skills(props) {
  const [isOnScreen, setIsOnScreen] = useState(false)
  const [enabled, setEnabled] = useState(false)

  return (
    <div id='skills' ref = { props.skillsContainer } className={`h-fit w-full lg:mx-0 p-4 mb-[200px] text-black flex flex-col rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all`}>

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
      <span>
      <span className="mr-2">See More</span>
      <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-color6' : 'bg-color4'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Tech Skill</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
      </Switch>
      </span>
       <div className={` ${ enabled ? 'h-fit opacity-100' : 'h-0 opacity-0'} text-color6 w-fit flex flex-wrap gap-4 transition-all ease-in w-2/6 duration-700 overflow-hidden`}>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Python</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>React.js</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Node.js</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Next.js</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>TypeScript</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>jQuery</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Django</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>HTML</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>CSS</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>JavaScript</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Express</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>SQL & NoSQL Databases</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>PostgreSQL</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>MySQL</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>SQLite</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>PyMongo</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>PeeWee</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>MongoDB</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Mongoose</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Flask</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}> MERN / MEN Stacks</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Object Oriented Programming (OOP) </p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Restful Routing</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Bootstrap CSS</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Bulma CSS</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>Tailwind CSS</p>
          <p className={`m-1 p-1 bg-color5/50 rounded-md hover:bg-color5/80 transition-colors text-color2`}>HeadlessUI</p>
        </div>
    </div>
  )
}

export default Skills