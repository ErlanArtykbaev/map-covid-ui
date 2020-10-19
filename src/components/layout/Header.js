import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/img/logo_beta.png'

const Header = () => {
  return(
    <header>
      <NavLink to='/' className='logo-box'>
        <img src={logo} alt='logo' className='logo' />
      </NavLink>
      <NavLink to='/admin' className='karta'>
        Вход
      </NavLink>
    </header>
  )
}

export default Header