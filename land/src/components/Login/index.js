import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import land from './land.jpg'
import urban from './urban.jpeg'
import farm from './farm.jpg'

function Login() {
  return (
    <>
       <div className='d-flex flex-row justify-content-center login-background'>
        <form className='d-flex flex-column mt-3 p-3 mb-2 bg-transparent text-dark'>
            <label htmlFor='username' className='fs-6'>Username
            </label>
            <input id="username"  type="text"   placeholder='username' />
            <br/> 
            <label>Password
            </label>
            <input id="password"  type="password" placeholder='password'/> 
            <br/>
            <div>
            <Link to="/"><button type='submit' className='btn btn-primary'>Submit</button></Link>
            </div>
        </form>
       </div>
    </>
  )
}

export default Login
