import React from 'react'
import '../css/LogoCloud.css'
import logoCloud from '../img/Logo_Cloud.jpg'

function LogoCloud() {
  return (
    <div className='logo-cloud'>
       <img className="logo-cloud-img" src={logoCloud} alt="" />
    </div>
  )
}

export default LogoCloud
