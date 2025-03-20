import React from 'react'
import { NavLink } from 'react-router-dom'

function ContactNav() {
  return (
    <div className='contactnav'> 
        
        <NavLink to="/contact/"><li>ContactNo1</li></NavLink>  
        <NavLink to="/contact/no"><li>ContactNo2</li></NavLink>
    </div>
  )
}

export default ContactNav