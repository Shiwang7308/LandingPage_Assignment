import React from 'react'
import '../css/Component1.css'
import component1 from '../img/Component1.jpg'

function Component1() {
  return (
    <div className='container'> 
        <img src={component1} alt="component1" />
    </div>
  )
}

export default Component1
