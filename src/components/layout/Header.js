import React from 'react'

import logo from '../../assets/img/logo_beta.png'

const Header = () => {
  return(
    <header>
      <div className='logo-box'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='karta'>
        karta
      </div>
    </header>
  )
}

export default Header