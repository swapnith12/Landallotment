import React from 'react'
import "./index.css"

function DetailsUpload() {
  return (
    <div className='Home-background'>
      <div className='d-flex flex-column justify-content-center'>
          <div className="input-group mb-3 align-self-center">
            <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" for="inputGroupFile02">Upload</label>
          </div>
          <div className="input-group mb-3 align-self-center">
            <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" for="inputGroupFile02">Upload</label>
          </div>
          <div className="input-group mb-3 align-self-center">
            <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" for="inputGroupFile02">Upload</label>
          </div>
          <div className="input-group mb-3 align-self-center">
            <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" for="inputGroupFile02">Upload</label>
          </div>
          <div>
            <button type="submit" className='btn btn-primary'>Submit</button>
          </div>
      </div>
    </div>
  )
}

export default DetailsUpload
