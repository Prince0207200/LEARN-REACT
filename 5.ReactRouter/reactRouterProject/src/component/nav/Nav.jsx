import { NavLink,Link } from 'react-router-dom'
import './nav.css'

import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <h1>POGO</h1>
        <ul>
           <NavLink to="/" className="nav-link"> <li >HOME</li> </NavLink>
           <NavLink to="/about" className="nav-link">  <li>ABOUT</li></NavLink>
           <Link to="/contact" className="nav-link"> <li>CONTACT</li></Link>

        </ul>
    </div>
  )
}

export default Nav