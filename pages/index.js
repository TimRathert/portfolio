import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer' 
import Navbar from '../components/Navbar'
import { useParalax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import React, { useRef } from 'react'

export default function Home() {
  const target = useRef(null)
  return (
    <div ref={target} className='${styles.container} flex flex-col bg-color4 text-color2'>
      <Head>
        <title>Tim Rathert</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`lg:w-2/3 lg:self-center`}>
      <ParallaxBanner
        strength={800}
        layers={[
          {
            children: <figure className = {`bg-color6 w-full h-screen`}></figure>
          },
          {       
            children: 
            <figure className={'bg-gradient-radial from-color1 to-white aspect-square h-2/5 rounded-full shadow-[5px_5px_10px_rgba(255,255,255,0.2)] before:bg-gradient-radial3 before:blur-lg '}>
              <span className={`bg-gradient-radial2 absolute`}></span>
            </figure>,
            expanded: false,
            speed: -35,
            scale: [1.4, 1],
            opacity: [2, 0.1], 
            translateY:[-80,80],
            translateX:[80,40],
            rotateX:[30,-0],
            
          },
          {       
            children: <Image src="/mountains.png" width='100%' height='100%' layout='fill' className={'mt-24'}/>,
            expanded: false,
            speed: -10,
            scale: [1, 1.4],
            opacity: [2, 1], 
          },
          {
            children: <div className={`text-5xl text-center motion-safe:animate-pulse `}>Hello World</div>,
            expanded: false,
            speed: 30,
            scale: [.6, 1.4],
            opacity: [1, .1],
            translateY:[65,105],
          },
          {
            /* opacity layer */
            opacity: [-0.2, 1],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
            children: (
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
            ),
          }
        ]}
      className="aspect-[2/1] z-0 opacity-95"
      />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={`${styles.grid}  h-72 my-72 `}>

        </div>
      </main>

      <Footer />

    </div>
  )
}
