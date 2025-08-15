import React from 'react'
import Card from './Card'
import img1 from '../assets/ranger.jpg'
import img2 from '../assets/lambo.jpg'
import img3 from '../assets/bmw.jpg'

function Hero() {
  return (
    <div className='hero'>
        <Card name="Range Rover" img={img1} price="1093.7k$ " />
        <Card name="Lambor" img={img2} price="1078.7k$ " />
        <Card name="BMW" img={img3} price="1009.7k$ " />
    </div>
  )
}

export default Hero