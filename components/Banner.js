import React, { useRef } from 'react'
import Image from 'next/image'
import { ParallaxBanner} from 'react-scroll-parallax'

function Banner(props) {
  return (
<ParallaxBanner
        className="aspect-[2/1] h-[40rem] mb-32 "
        strength={800}
        ref = {props.mainBanner}
        layers={[
          // {
          //   children: <figure className = {`bg-color6 w-full h-screen`}></figure>
          // },

          {       
            children: 
            <Image src='/sky.jpg' width='100%' height='100%' layout='fill' className={'sepia-[30%]'}/>,
            expanded: false,
            speed: -20,
          },
          {       
            children: 
            <figure className={'bg-gradient-radial sepia-[40%] from-color1 to-white aspect-square h-2/5 rounded-full shadow-[5px_5px_10px_rgba(255,255,255,0.2)] before:bg-gradient-radial3 before:blur-lg '}>
              <span className={`bg-gradient-radial2 absolute`}></span>
            </figure>,
            expanded: false,
            speed: -35,
            scale: [1.4, 1],
            opacity: [3, 0.1], 
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
            children: <div className={`text-color1/50 text-5xl text-center -skew-x-12 -scale-y-100 opacity-5 motion-safe:animate-pulse`}>Hello World</div>,
            expanded: false,
            speed: 30,
            scale: [.6, 1.4],
            opacity: [1, .1],
            translateY:[85,105],
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-color6" />
            ),
          }
        ]}
      />
  )
}

export default Banner