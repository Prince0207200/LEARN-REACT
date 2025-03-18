import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
function Mainbody() {
  return (
    <div className='mainb'>
      <img src= {img1} alt="" width="300px" />
      <img src= {img2} alt="" width="300px"  />
      <img src= {img3} alt="" width="300px"  />
      
    </div>
  )
}

export default Mainbody