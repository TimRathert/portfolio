import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Menu } from '@headlessui/react'

function Navbar() {
  return (
    <div className= {`${styles.Navbar} h-12 bg-color2 text-color6 flex justify-between `}>
        <div className={`self-center p-8 font-medium`}>
            Tim Rathert
        </div>
        <div className='self-center p-8'>
            <Menu>
                <Menu.Button>More</Menu.Button>
                <Menu.Items>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            > Account settings
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            > Documentation
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item disabled>
                        <span className="opacity-75">Invite a friend (coming soon!)</span>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    </div>
  )
}

export default Navbar