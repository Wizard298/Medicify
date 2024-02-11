import React from 'react'
import '../css_part/List.css'
import { Link } from 'react-router-dom'


function List() {
  return (
    <>

    <div className="box1">
        <h2 className='categories-box1'>Categories</h2>

        <div className="medicine link-box1">
            <Link className='link' to="/health/allmedicine">All Medicines</Link>
        </div>

        <div className="medicine link-box1">
            <Link className='link' to="/health">Fever</Link>
        </div>

        <div className="covid link-box1">
            <Link className='link' to="/health/covid">Covid</Link>
        </div>

        <div className="diabetes link-box1">
            <Link className='link' to="/health/diabetes">Diabetes</Link>
        </div>

        <div className="fitness-health link-box1">
            <Link className='link' to="/health/fitness">Fitness</Link>
        </div>

        <div className="cardic_Care link-box1">
            <Link className='link' to="/health/CardiacCare">Cardiac-care</Link>
        </div>

        <div className="ayurvedic link-box1">
            <Link className='link' to="/health/ayurvedic">Ayurvedic</Link>
        </div>

        <div className="ayurvedic link-box1">
            <Link className='link' to="/health/weight">Weight Care</Link>
        </div>

        <div className="ayurvedic link-box1">
            <Link className='link' to="/health/joint">Bone and Joint</Link>
        </div>

        <div className="ayurvedic link-box1">
            <Link className='link' to="/health/care">Personal Care</Link>
        </div>

        <div className="ayurvedic link-box1">
            <Link className='link' to="/health/lung">Lung Care</Link>
        </div>
    </div>

    </>
  )
}

export default List
