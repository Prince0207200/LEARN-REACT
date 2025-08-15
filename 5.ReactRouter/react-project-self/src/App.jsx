import React from 'react'
import Nav from './component/Nav'
import './App.css'
import Footer from './component/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App