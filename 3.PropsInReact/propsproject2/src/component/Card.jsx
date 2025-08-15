import React from 'react'

function Card({img,name,price}) {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  )
}

export default Card