import React from 'react'
import Image from 'next/image'


function InfoCard(props) {
  return (
    <div ref={props.infoDiv} id='infoCard' className={` w-full lg:mx-0 p-4 mt-32 mb-[200px] flex flex-col sm:flex-row rounded-2xl bg-color2 shadow-[2px_2px_5px_rgba(0,0,0,0.2)]`}>
      <Image objectFit='cover' src='/me.jpg'height={`400px`} width={`400px`} className={`aspect-square rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.3)]`} alt="Tim Rathert"/>

      <div className='text-color6 bg-fixed bg-containerbg w-full rounded-xl p-2 m-1 flex-col place-content-center sepia-[50%]'>
        <div className={`text-white text-3xl`}>Hello!</div>
        <div className={`text-white text-lg mt-4`}>I&apos;m a full stack software developer with a love of learning through for problem solving. I am driven by my desire to understand and my passion for helping others reach their maximum potential. I&apos;m a hobbyist musician and rock climber.  </div>
        <div className={`text-white text-lg my-4`}>Looking for a developer? <a href='mailto:rathertt@gmail.com' type='' className='transition-all duration-[.5s] hover:bg-color1/40 p-2 rounded-lg bg-color1/20 self-end'>Email Me</a> </div>
      </div>
  </div>
  )
}

export default InfoCard