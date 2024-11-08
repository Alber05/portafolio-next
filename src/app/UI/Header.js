'use client'

import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='sticky top-0 z-[100] flex h-[80px] w-full items-center py-3 text-white'>
      {/* Capa de desenfoque en la parte inferior */}
      <div className='pointer-events-none absolute left-0 top-0 z-[90] h-[80px] w-full bg-transparent backdrop-blur-sm' />
      <div className='navWrapper mx-auto flex h-full w-[90%] items-center justify-between'>
        <h2 className='header-title relative z-[100] text-4xl font-bold'>
          A<span className='text-customCyan'>S</span>V
        </h2>
        <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
        <DesktopNav />
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: '#fafafb' }}
          className='hamburger-icon relative z-[100] h-6 cursor-pointer md:hidden'
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </header>
  )
}

export default Header
