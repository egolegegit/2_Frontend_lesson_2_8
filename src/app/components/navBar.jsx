import React from 'react'

import { Link } from 'react-router-dom'

import ThemeToggle from '../components/themetoggle/ThemeToggle.jsx'

const NavBar = () => {
  return (
    <div className="flex justify-end h-10">
      <ThemeToggle ml-4 />

      <Link className="navbar-link" to="/dashboard">
        Dashboard
      </Link>

      <Link className="navbar-link" to="/">
        Home
      </Link>

      <Link className="navbar-link" to="/auth">
        Login
      </Link>
    </div>
  )
}

export default NavBar
