import React from 'react'

import ContactNav from './ContactNav'
import { Outlet } from 'react-router-dom'
import ContactAdd from './ContactAdd'


function Contact() {
  return (
    <div className='contact'>
      <ContactAdd/>
      <ContactNav/>
      <Outlet/>
      </div>
  )
}

export default Contact