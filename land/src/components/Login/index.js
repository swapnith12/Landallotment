import React from 'react'

import './index.css'

function Login() {
  return (
    <>
       <div className='d-flex flex-row justify-content-center login-background'>
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
            <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
       </div>
    </>
  )
}

export default Login
