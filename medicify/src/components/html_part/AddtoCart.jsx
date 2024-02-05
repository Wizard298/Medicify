import React from 'react'
import '../css_part/AddtoCart.css'

function AddtoCart() {
  return (
    <>
    
    <div className="addcart-page">
        <div className="addcart-img">
            <img src="https://www.netmeds.com/images/product-v1/150x150/112125/vicks_vaporub_5_ml_0.jpg" alt="error"/>
        </div>
        <div className='addcart-div'>
            <div className='addcart-div-part1'>
                <h1 className='addtocart-heading'>Vicks Vaporub 5 ml</h1>
                <p className='addtocart-para'>Mkt: Procter &amp; Gamble Hygiene And Health Care Limited</p>
            </div>
            <div className='addcart-div-part2'>
                <h3 className='addtocart-price'>Rs. 22.80</h3>
                <p className='addtocart-para'>Inclusive of all taxes</p>
                <i>*This product cannot be returned for a refund or exchange</i>
                <br />
                <i>*Country of Origin: <b>India</b> </i>
                <br />
                <i>*Delivery Changes if applicable will be applied at checkout</i>
                <br />
            </div>
        </div>
    </div>

    </>
  )
}

export default AddtoCart
