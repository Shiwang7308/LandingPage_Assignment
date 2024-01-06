import React from 'react'
import '../css/Navbar.css'
import logo from '../img/logo.jpg'
import chevron_down from '../img/chevron_down.jpg'
import log_in from '../img/log_in.jpg'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
             <div className="navbar-logo">
              <img src={logo} alt="logo" className="logo" />
             </div>

               <div className="navbar-menu">
               <span className='navbar-chevron'>
                <a href="#" className="navbar-link">Card access</a>
                <img src={chevron_down} alt="chevron_don" /> 
                </span>
                <a href="#" className="navbar-link">Banking</a>
                <a href="#" className="navbar-link">Processing</a>
                <a href="#" className="navbar-link">About</a>
                <a href="#" className="navbar-link">Carrier</a>
                <a href="#" className="navbar-link">Contact</a>
             </div>

                <div className="navbar-action">
                <button className="btn">Login</button>
                <img className="log-in" src={log_in} alt="chevron_don" />        
                </div>
        </nav>
    </>
  )
}

export default Navbar
