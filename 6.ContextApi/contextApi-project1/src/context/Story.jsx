import React from 'react'
import { createContext } from 'react'

export let hindik=createContext()

function Story({children}) {
    let khani={
        names: "Magar ka dukh",
        storyline: "ek smay ki baat hai"
    }

  return (
    <div>
        <hindik.Provider value={khani}>
            {children}
        </hindik.Provider>
    </div>
  )
}

export default Story