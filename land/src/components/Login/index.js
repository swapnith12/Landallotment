import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

function Login() {
  return (
    <div className='login-background h-100'>
       <div className='d-flex flex-row justify-content-center'>
        <form className='d-flex flex-column mt-3 p-3 mb-2 bg-transparent text-dark'>
            <label htmlFor='username' className='fs-6'>Username
            </label>
            <input id="username" type="text" placeholder='username'/>
            <br/> 
            <label>Password
            </label>
            <input id="password" type="password" placeholder='password'/> 
            <br/>
            <div>
            <Link to="/"><button type='submit' className='btn btn-primary'>Submit</button></Link>
            </div>
        </form>
       </div>
    </div>
  )
}

export default Login
