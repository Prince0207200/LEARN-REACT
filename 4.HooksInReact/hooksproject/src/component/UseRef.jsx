import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
import "./user.css"


// function UseRef() {
//     let obj=useRef(2)
//     let [num,setNum]=useState(0);
    
//       useEffect(()=>{
//         obj.current=obj.current+1
        
//       })


//   return (
//     <>
//     <div className='app'>{obj.current}
//     <button onClick={()=>{setNum(num=>num+10)}}>btnn{num} </button>
//     </div>
    
//     </>
    
//   )
// }



function UseRef() {
    let inRefe=useRef("")
    console.log(inRefe)
    

  return (
    <div className='user'>
    <input type="text" ref={inRefe} value="prince" />
    
    </div>
    
  )
}
export default UseRef