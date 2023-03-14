import React from 'react'
import Chart from '../Chart'
import "./index.css"

function Home() {
  return (
    <div className='Home-background'>
      <h1 className='fsc-bold'>Welcome Eentrepreneur</h1>
      <div className='d-flex justify-content-center'>
      <Chart/>
      </div>
      <div className='d-flex flex-row justify-content-between'>
        <div>
        <h1 className='text-white fsc-bold'>Apply for Land Allotment here.</h1>
        <p className='text-white fsc-bold'>After Initial registration, Entrepreneur fills basic
                details and clicks on link <br/>“Apply land allotment
                from APIIC” and system redirects to APIIC
                application
        </p>
        </div>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-white fsc-bold">Email address</label>
                <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white fsc-bold">Organisation</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white fsc-bold">Role</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white fsc-bold">Income</label>
                <input type="number" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input text-white fsc-bold" id="exampleCheck1"/>
                <label className="form-check-label text-white fsc-bold" for="exampleCheck1">Agree for terms*</label>
            </div>
            <button type="submit" className="btn btn-primary">Apply</button>
        </form>
      </div>
    </div>
  )
}

export default Home
