import React from 'react'
import {NavLink, Link } from 'react-router-dom'


//here it will refresh the psge on everyclick if use a tag so use nav or nav link

//         <li><a href="/">Home</a></li>
//         <li><a href="/contact">Contact</a></li>  
//         <li><a href="/about">About</a></li>


//   link--inernal use (update ui without refreshing page )and can be external but it will refesh page
//          <li><Link to="/">Home</Link> </li>
//          <li><Link to="/about">About</Link> </li>
//          <li><Link to="/contact">Contact</Link> </li>


// navlink --styling using active class, only inernal use (update ui without refreshing page ) no external



function Nav() {
  return (
    <nav>
      <h1>NAV</h1>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> </li>
         <li><NavLink to="/about" className={({isActive})=>isActive ? "active":""}>About</NavLink> </li>
         <li><NavLink to="/contact" className={({isActive})=> isActive ?"active":""}>Contact</NavLink> </li>
         
      </ul>
    </nav>
  )
}

export default Nav


