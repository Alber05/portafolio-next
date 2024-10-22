import React from 'react'

function DesktopNav() {
  return (
    <nav className='relative z-[100] hidden h-full items-center md:flex'>
      <ul className='items center flex gap-8 text-xl font-semibold'>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#'>
            Inicio
          </a>
        </li>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#'>
            Proyectos
          </a>
        </li>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#'>
            Habilidades
          </a>
        </li>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#'>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav
