import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <NavLink className="btn btn-secondary" to="/">HOME</NavLink>
      <NavLink className="btn btn-secondary" to="/countries">COUNTRIES</NavLink>
      <NavLink className="btn btn-secondary" to="/food">FOOD RECIPE</NavLink>
    </div>
  )
}
