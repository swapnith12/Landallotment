import React from 'react'
import { Link } from 'react-router-dom'

const data1 = [
  {
    count:12345657,
    language: "Urban",
  },
  {
    count: 809680,
    language: "Commercial",
  },
  {
    count: 4555697,
    language: "Farms",
  },
]

function Home() {
  return (
    <>
       <div className='d-flex flex-row justify-content-center login-background'>
        <form className='d-flex flex-column mt-3 p-3 mb-2 bg-transparent text-dark'>
            <label htmlFor='username' className='fs-6'>Username
            </label>
            <input id="username"  type="text"   placeholder='username' Required/>
            <br/> 
            <label>Password
            </label>
            <input id="password"  type="password" Required placeholder='password'/> 
            <br/>
            <div>
            <Link to="/"><button type='submit' className='btn btn-primary'>Submit</button></Link>
            </div>
            <Link to="/Uploads"><button type="submit" className="btn btn-primary">Apply</button></Link>
        </form>
       </div>
    </>
  )
}

export default Home