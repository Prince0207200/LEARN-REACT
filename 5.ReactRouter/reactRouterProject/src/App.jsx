import React from 'react'
import './App.css'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App