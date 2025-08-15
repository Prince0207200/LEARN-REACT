import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <h2>LOGO</h2>
        <ul>
            <NavLink to="/"><li>HOME</li></NavLink>
            <NavLink to="/about"><li>ABOUT</li></NavLink>
            <NavLink to="/contact"><li>CONTACT</li></NavLink>
        </ul>
    </div>
  );
}

export default Nav;
