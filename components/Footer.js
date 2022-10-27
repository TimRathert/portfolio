import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import LinkedInLogo from '../public/LI.png'
import GitHubLogo from '../public/github.svg'

function Footer() {
  return (
    <footer id="footer" className={`${styles.footer} bg-color2 border-t-2 border-color1/60`}>
        <a
          href="https://www.linkedin.com/in/tim-rathert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className='drop-shadow-2xl transition-all hover:bg-color2/40 p-8 m-8 rounded-lg' 
            src={LinkedInLogo} width='50px' height='50px' alt='LinkedIn Link' />
        </a>
        <a
          href="https://github.com/TimRathert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className='drop-shadow-2xl transition-all hover:bg-color2/40 p-8 rounded-lg'
            src={GitHubLogo} width='50px' height='50px' alt='LinkedIn Link' />
        </a>
    </footer>
  )
}

export default Footer