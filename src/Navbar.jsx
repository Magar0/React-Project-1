import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './navbarStyle.css'

const Navbar = () => {

  const myStyle = {
    fontSize: '1.5rem',
    padding: '15px',
    backgroundColor: '#e3e0bc'
  }

  return (
    <>
      <nav style={myStyle} className='header' >
        <NavLink to='/'>Food App</NavLink>
        <NavLink to='/todolist'>Todo List</NavLink>
        <NavLink to='/weather'>Weather</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar