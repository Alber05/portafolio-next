import React from 'react'

function DesktopNav() {
  return (
    <nav className='relative z-[100] hidden h-full items-center md:flex'>
      <ul className='items center flex gap-8 text-xl font-semibold'>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#hero'>
            Inicio
          </a>
        </li>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#about-me'>
            Sobre mí
          </a>
        </li>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#skills'>
            Habilidades
          </a>
        </li>
        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#projects'>
            Proyectos
          </a>
        </li>

        <li className='navlLink-destop_wrapper'>
          <a className='navLink-desktop_item' href='#contact'>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav
