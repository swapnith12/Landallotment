import React from 'react'
import {Link} from "react-router-dom"
import "./index.css"

function DetailsUpload() {
  return (
    <div className='Home-background d-flex flex-column justify-content-start'>
      <div class="card border-success mb-3"  style={{width: "18rem"}}>
        <div class="card-header bg-transparent border-success">Payment Process</div>
        <div class="card-body text-success">
          <h5 class="card-title fsc-bold text-waring">You Have Selected This Plot</h5>
          <p class="card-text fsc-bold text-waring">Adress-: 111/191,1200sqt,near main road</p>
        </div>
        <div class="card-footer bg-transparent border-success fsc-bold text-waring">Visiting any time</div>
      </div>
      <div className='d-flex flex-column p-3'>
          <form className='mb-2'>
            <div class="form-group">
              <input type="text" class="form-control-file" id="exampleFormControlFile10" placeholder='Enter Organisation details'/>
              <br/>
              <label for="exampleFormControlFile1">Upload Id Card</label><br/>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
          </form>
        <br/>
        <form className='mb-2'>
            <div class="form-group">
              <input type="text" class="form-control-file" id="exampleFormControlFile11" placeholder='Enter any loans pending'/>
              <br/>
              <label for="exampleFormControlFile1">Upload Reference</label><br/>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
        </form>
        <br/>
        <form className='mb-2'>
            <div class="form-group">
              <input type="number" class="form-control-file" id="exampleFormControlFile12" placeholder='Enter monthly salary'/>
              <br/>
              <label for="exampleFormControlFile1">Upload PaySlip</label><br/>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
        </form>
        <br/>
        <form>
            <div class="form-group">
            
              <input type="text" class="form-control-file" id="exampleFormControlFile13" placeholder='Enter and Aadhar nubner'/>
              <br/>
              <label for="exampleFormControlFile1">Upload Aadhar or PAN</label><br/>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
        </form>
          <div className='mt-3'>
            <Link to="/"><button type="submit" className='btn btn-primary'>Pay Now</button></Link>
          </div>
      </div>
    </div>
  )
}

export default DetailsUpload
