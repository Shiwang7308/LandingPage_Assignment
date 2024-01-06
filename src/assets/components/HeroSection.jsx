import React from 'react'
import Mesh from '../img/hero_section.png'
import '../css/heroSection.css'

function HeroSection() {
  return (
    <div className='hero-section'>
      <img className="mesh" src={Mesh} alt="Mesh" />
    </div>
  )
}

export default HeroSection
