import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/themetoggle/ThemeToggle.jsx'

const NavBar = () => {
  return (
    <ul className="flex justify-end h-10">
      <li className="flex items-center px-2 ml-4">
        <ThemeToggle />
      </li>
      <li className="flex items-center px-2 ml-4 hover-link">
        <Link to="/">Home</Link>
      </li>
      <li className="flex items-center px-2 ml-4 hover-link">
        <Link to="/login">Login</Link>
      </li>
      <li className="flex items-center px-2 ml-4 hover-link">
        <Link to="/posts">Posts</Link>
      </li>
      <li className="flex items-center px-2 ml-4 hover-link">
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  )
}

export default NavBar
