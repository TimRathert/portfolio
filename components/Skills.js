import React from 'react'

function Skills(props) {
  return (
    <div id='skills' ref = { props.skillContainer } className={`h-fit w-full overflow-x-auto lg:mx-0 p-4 mb-[400px] text-black flex flex-row rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all`}>
        Things I can do:
    </div>
  )
}

export default Skills