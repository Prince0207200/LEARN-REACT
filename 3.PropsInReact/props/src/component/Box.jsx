import React from 'react'

// function Box(props) {
//     console.log(props)
//   return (
//     <div className='box'>
        
//         <h1>{props.names}</h1>
//         <h2>MERN Developer</h2>
//     </div>
//   )
// }

function Box({name="Amrit" ,pro="MERN Developer"}) {
  
    return (
      <div className='box'>
          
          <h1>{name}</h1>
          <h2>{pro}</h2>
      </div>
    )
  }

export default Box