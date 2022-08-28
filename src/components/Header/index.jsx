import React, { useState } from 'react'
import logo from 'images/logo.svg'
import './style.scss'

function Header() {
  const [toggleActive, setToggleActive] = useState(false)

  return (
    <header className="Header">
      <img src={logo} alt="fylo logo" className="logo" />

      <nav className="nav-bar">
        <a className="nav-link" href="#feature">
          Features
        </a>
        <a className="nav-link" href="#team">
          Team
        </a>
        <a className="nav-link" href="#signin">
          Sign In
        </a>
      </nav>

      <div className="hamburger" onClick={() => setToggleActive((prev) => !prev)}>
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
      </div>

      <div className={`toggle-menu-wrapper ${toggleActive && 'active'}`}>
        <div className="triangle"></div>
        <div className="inner-wrapper">
          <a className="menu-item" href="#feature">
            Features
          </a>
          <a className="menu-item" href="#team">
            Team
          </a>
          <a className="menu-item" href="#signin">
            Sign In
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
