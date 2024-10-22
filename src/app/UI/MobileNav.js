import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function MobileNav({ showMenu, setShowMenu }) {
  return (
    <div
      className={`fixed left-0 top-0 z-10 min-h-screen w-[50vw] md:hidden ${
        showMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-50'
      } bg-customGray text-customNavyBlue transition duration-200`}
    >
      <div className='mx-auto flex h-[80px] w-[80%] items-center justify-end py-3'>
        {' '}
        <FontAwesomeIcon
          icon={faXmark}
          className='h-6 cursor-pointer'
          onClick={() => setShowMenu(false)}
        />
      </div>
      <nav className='mx-auto w-[80%]'>
        <ul className='flex flex-col gap-8 text-lg font-semibold'>
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
    </div>
  )
}

MobileNav.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired
}

export default MobileNav
