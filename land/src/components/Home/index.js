import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../Chart'
import "./index.css"

const data = [
  {
    count: 809680,
    language: "WaitingList",
  },
  {
    count: 4555697,
    language: "Sold",
  },
  {
    count: 12345657,
    language: "Brought",
  },
]

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
    <div className='Home-background'>
      <h1 className='fsc-bold'>Welcome Eentrepreneur</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        <Chart data={data}/>
        <Chart data={data1}/>
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
                <input type="text" required  className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white fsc-bold">Role</label>
                <input type="text" required className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white fsc-bold">Income</label>
                <input type="number" required className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" required className="form-check-input text-white fsc-bold" id="exampleCheck1"/>
                <label className="form-check-label text-white fsc-bold" for="exampleCheck1">Agree for terms*</label>
            </div>
            <Link to="/Uploads"><button type="submit" className="btn btn-primary">Apply</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Home
