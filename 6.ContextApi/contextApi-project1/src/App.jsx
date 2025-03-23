import React from 'react'
import { data } from './context/UserContext'
import { useContext } from 'react'
import Card from './Card'
import Story from './context/Story'
import BaatCompo from './BaatCompo'


function App() {
  //this is where we req data which is send from usercontext by hook called useContext()
  let name=useContext(data)

  
  return (
    <div>
      <h1>App {name}</h1>
      
      <Card/>
      <BaatCompo/>
      
      
    </div>
  )
}

export default App