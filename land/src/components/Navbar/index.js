import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar bg-body-primary bg-primary">
    <div class="container">
        <div className='d-flex align-items-center'> 
        <a class="navbar-brand" href="#">
        <h3 className='text-white text-center'>Land Allotment</h3>
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
