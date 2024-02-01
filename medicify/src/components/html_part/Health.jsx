import React from 'react'
import '../css_part/Health.css'
import '../css_part/Medicine.css'
import Medicine from './Medicine'
import List from './List'

function Health() {
  return (

    <>

    <h1 className='list-heading'>Medicine</h1>

    <div className="box">

      <List/>

      <div className="box2">
        <Medicine/>
      </div>

    </div>

    
    
    </>


  )
}

export default Health
