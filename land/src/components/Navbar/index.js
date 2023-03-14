import React from 'react'
import Aplogo from './Aplogo.png'


function Navbar() {
  return (
    <nav class="navbar bg-body-success bg-success">
    <div class="container">
        <div className='d-flex align-items-center justify-content-start'> 
        <a class="navbar-brand" href="#">
        <h3 className='text-white text-center'><span><img src={Aplogo} width="100" height="70"  alt="" /></span>
        Land Allotment</h3>
        </a>
        </div>
        <div>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">Sign Up</li>
          <li class="list-group-item">Services</li>
          <li class="list-group-item">About</li>
        </ul>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
