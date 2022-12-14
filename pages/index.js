import Head from 'next/head'
import Footer from '../components/Footer' 
import Navbar from '../components/Navbar'
import { Parallax } from 'react-scroll-parallax'
import React, { useRef, useState } from 'react'
import InfoCard from '../components/InfoCard'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Banner from '../components/Banner'


export default function Home() {
  const target = useRef()
  const infoDiv = useRef()
  const mainBanner = useRef()
  const skillsContainer = useRef()
  const [infoDivActive, setInfoDivActive] = useState(false)

  return (
    <div ref={target} className={`flex h-fitcontent justify-center flex-col bg-gradient-to-b from-color5 via-color1/50 to-color2 text-color2 transition-all duration-700 overflow-hidden`}>
      <Head>
        <title>Tim Rathert</title>
        <meta name="Tim Rathert" content="Tim built this in NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`lg:w-2/3 lg:self-center`}>
      <Banner mainBanner = {mainBanner} />
      
{/* animations for scroll */}
      <Parallax 
        targetElement={infoDiv.current} 
        onEnter={()=>{setInfoDivActive(!infoDivActive)}} 
        onExit={()=>{setInfoDivActive(!infoDivActive)}} 
        speed={-15} 
        className={`flex justify-center`}
        translateX={['90vw','-90vw']}
        >
          <div className={`info w-5/6 h-8 my-2 transition-all bg-color5 duration-[2000] lg:w-full ${infoDivActive ? 'opacity-100' : 'opacity-0'} rounded-2xl shadow-[5px_5px_10px_rgba(0,0,0,0.3)]`}> 
          </div>
      </Parallax>
      <Parallax 
        targetElement={infoDiv.current} 
        onEnter={()=>{setInfoDivActive(!infoDivActive)}} 
        onExit={()=>{setInfoDivActive(!infoDivActive)}} 
        speed={-10} 
        className={`flex justify-center`}
        translateX={['-100vw','90vw']}
        >
          <div className={`info w-5/6 h-8 my-2 transition-all bg-color4 duration-[2000] lg:w-full ${infoDivActive ? 'opacity-100' : 'opacity-0'} rounded-2xl shadow-[5px_5px_10px_rgba(0,0,0,0.3)]`}> 
          </div>
      </Parallax>
      <Parallax 
        targetElement={infoDiv.current} 
        onEnter={()=>{setInfoDivActive(!infoDivActive)}} 
        onExit={()=>{setInfoDivActive(!infoDivActive)}} 
        speed={-5} 
        className={`flex justify-center`}
        translateX={['90vw','-110vw']}
        >
          <div className={`info w-5/6 h-8 my-2 transition-all duration-[2000] bg-color3 lg:w-full ${infoDivActive ? 'opacity-100' : 'opacity-0'} rounded-2xl shadow-[5px_5px_10px_rgba(0,0,0,0.3)]`}> 
          </div>
      </Parallax>
      <Parallax 
        targetElement={infoDiv.current} 
        onEnter={()=>{setInfoDivActive(!infoDivActive)}} 
        onExit={()=>{setInfoDivActive(!infoDivActive)}} 
        speed={-2} 
        className={`flex justify-center`}
        translateX={['-120vw','90vw']}
        >
          <div className={`info w-5/6 h-8 my-2 transition-all bg-color2 duration-[2000] lg:w-full ${infoDivActive ? 'opacity-100' : 'opacity-0'} rounded-2xl shadow-[5px_5px_10px_rgba(0,0,0,0.3)]`}> 
          </div>
      </Parallax>

      <InfoCard infoDiv = {infoDiv}/>
        <Parallax
          speed={25}
          translateY={['100px','0px']}>
        </Parallax>
      

      <Parallax
        targetElement={infoDiv.current}
        speed={-5}
        scale={[0,1]}
        >
        <Skills skillsContainer = { skillsContainer }/>
      </Parallax>

      <Parallax
        targetElement={skillsContainer.current}
        speed={-5}
        scale={[0,1]}
        >
        <Projects />
      </Parallax>



      </main>

      <Footer />

    </div>
  )
}
