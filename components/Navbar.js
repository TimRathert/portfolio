import React from 'react'
import styles from '../styles/Home.module.css'
import { Menu, Transition } from '@headlessui/react'
import * as Scroll from 'react-scroll'


function Navbar() {  
    let Link = Scroll.Link
  return (
    <div className= {`${styles.Navbar} z-50 border-b-2 border-color1/60 h-18 md:h-12 bg-color2 text-color6 flex flex-row justify-between `}>
        <div className={`self-center p-8 font-medium select-none`}>
            Tim Rathert
        </div>

        <Menu as='div' className={`select-none relative self-center px-8 transition-opacity rounded-lg`}>
        {({ open }) => (
            <>
                <span className="rounded-md shadow-sm">
                    <Menu.Button className={`hover:bg-color6/10 p-2 rounded-lg`}>
                        <span>Menu</span>
                    </Menu.Button>
                </span>
                <Transition
                    show={open}
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-150 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className={`z-10`}
                    >
                <Menu.Items static className={`z-50 absolute bg-color2 right-0 origin-top-right p-2 rounded-lg flex flex-col w-56 shadow-inner shadow-color1`}>
                    
                    <div className={`p-2 rounded-lg`}>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active ? 'bg-color1/60' : 'bg-color1/3'} p-2 rounded-lg`}
                                    href="https://drive.google.com/file/d/1Hw41F5t3CAHdpt4XkgnI2O1kSspMSFGY/view?usp=sharing"
                                    target='_blank'
                                    rel='noreferrer'
                                > Tim&apos;s Resume
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item  as='div'>
                            {({ active }) => (
                                <Link
                                    className={`${active ? 'bg-color1/60' : 'bg-color1/0'} p-2 rounded-lg`}
                                    href="/account-settings"
                                    activeClass="active" to="project-container" 
                                    spy={true} delay={200} isDynamic={true} smooth={true} offset={50} duration={900} 
                                > Jump to Projects
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item  as='div'>
                            {({ active }) => (
                                <Link
                                    className={`${active ? 'bg-color1/60' : 'bg-color1/0'} p-2 rounded-lg`}
                                    href="/account-settings"
                                    activeClass="active" to="footer" 
                                    spy={true} delay={200} isDynamic={true} smooth={true} offset={50} duration={900} 
                                > Jump to Links
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
                </Transition>
        </> 
        )}
        </Menu>

    </div>
  )
}

export default Navbar