import React from 'react'
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='bg-gray-700 w-full py-5 flex items-center justify-center border-b border-gray-600'>
      <img src={logo} alt="Logo da plataforma de evento" />  
    </header>
  )
}

export default Header