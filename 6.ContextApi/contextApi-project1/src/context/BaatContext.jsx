import React from 'react'
import { createContext } from 'react'
export let baatt=createContext()

function BaatContext({children}) {
    let bat={
        puran:"asdfgh",
        nyi: "fghjk"
    }
  return (
    <div>
        <baatt.Provider value={bat}>
        {children}
        </baatt.Provider>
     </div>
  )
}

export default BaatContext