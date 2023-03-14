import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import land from './land.jpg'
import urban from './urban.jpeg'
import farm from './farm.jpg'

function Login() {
  return (
    <div className='container-fluid height="100" login-background'>
       <div className='d-flex flex-row justify-content-center '>
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
       <div className='d-flex flex-row flex-wrap justify-content-around'>
       <div class="card" style={{width: "18rem"}}>
          <img src={land} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Commerical land</h5>
            <p class="card-text">Commercial land use is intended for structures like warehouses, shopping malls, shops, restaurants and office spaces.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Plot link</a>
            <a href="#" class="card-link">Images link</a>
        </div>
       </div>
       <div class="card" style={{width: "18rem"}}>
          <img src={urban} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Urban land</h5>
            <p class="card-text">Urban land may be defined as land used or expected to be used for urban activities. Its attributes include location, space, property, clustering, heterogeneity and immobility and indestructibility.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Plot link</a>
            <a href="#" class="card-link">image link</a>
        </div>
       </div>
       <div class="card" style={{width: "18rem"}}>
          <img src={farm} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Farm land</h5>
            <p class="card-text"> land used or suitable for farming Agricultural land refers to the share of land area that is arable, under permanent crops, and under permanent pastures.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Plot link</a>
            <a href="#" class="card-link">image link</a>
        </div>
       </div>
       </div>
    </div>

    
  )
}

export default Login