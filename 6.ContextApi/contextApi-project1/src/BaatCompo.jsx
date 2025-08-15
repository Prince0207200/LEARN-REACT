import React from 'react'
import { useContext } from 'react'
import { baatt } from './context/BaatContext'

function BaatCompo() {
    let ob=useContext(baatt)
  return (
    <div>BaatCompo
        <h1>{ob.nyi}</h1>
    </div>
  )
}

export default BaatCompo