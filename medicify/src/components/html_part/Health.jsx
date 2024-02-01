import React from 'react'
import '../css_part/Health.css'
import '../css_part/Medicine.css'
import { Link } from 'react-router-dom'
import Medicine from './Medicine'

function Health() {
  return (

    <>

    <div className="box">

      <div className="box1">
        <h2 className='categories-box1'>Categories</h2>
        <div className="covid link-box1">
          <Link className='link' to="/health/covid">Covid</Link>
        </div>
        <div className="diabetes link-box1">
          <Link className='link' to="/">Diabetes</Link>
        </div>
        <div className="fitness-health link-box1">
          <Link className='link' to="/">Fitness</Link>
        </div>
        <div className="cardic_Care link-box1">
          <Link className='link' to="/">Cardic-care</Link>
        </div>
        <div className="ayurvedic link-box1">
          <Link className='link' to="/">Ayurvedic</Link>
        </div>
      </div>

      <div className="box2">
          <Medicine/>
      </div>

    </div>

    
    
    </>


  )
}

export default Health
