import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import LinkedInLogo from '../public/LI.png'
import GitHubLogo from '../public/github.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/tim-rathert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={LinkedInLogo} width='50px' height='50px' alt='LinkedIn Link' />
        </a>
        <a
          href="https://github.com/TimRathert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GitHubLogo} width='50px' height='50px' alt='LinkedIn Link' />
        </a>
    </footer>
  )
}

export default Footer