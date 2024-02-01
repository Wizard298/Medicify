import React from 'react'
import '../css_part/Medicine.css'
import List from './List'

function Covid() {
  return (

    <>
    <h1 className='list-heading'>Covid</h1>

    <div className="box">

      <List/>

      <div className='box2'>
        {/* <div className="cart-main"> */}
        <div className="container">
          <div className="cart-img">
            <img
              src="https://www.netmeds.com/images/product-v1/150x150/15129/dettol_instant_hand_sanitizer_original_50_ml_33218_0_1.jpg" alt="Dettol Instant Hand Sanitizer - Original 50 ml"
            />
          </div>
          <p className="cart-para">Dettol Instant Hand Sanitizer - Original 50 ml</p>
          <p className="cart-italic">Mkt: Reckitt Benckiser Healthcare India Private Limited</p>
          <div className="price">
            <span className="cart-price">MRP:</span>
            <span className="cart-discount">Rs.24.75</span>
          </div>
          <button className="main-cart-btn edit-btn">Add to cart</button>
        </div>
        <div className="container">
          <div className="cart-img">
            <img
              src="https://www.netmeds.com/images/product-v1/150x150/932747/romsons_kare_n95_face_mask_1s_0_0.jpg" alt="Romsons Kare N95 Face Mask 1's"
            />
          </div>
          <p className="cart-para">Romsons Kare N95 Face Mask 1's</p>
          <p className="cart-italic">Mkt: Romsons Scientific &amp; Surgical Pvt Ltd</p>
          <div className="price">
            <span className="cart-price">MRP: </span>
            <span className="cart-discount">Rs.63.00</span>
          </div>
          <button className="main-cart-btn edit-btn">Add to cart</button>
        </div>
        <div className="container">
          <div className="cart-img">
            <img
              src="https://www.netmeds.com/images/product-v1/150x150/938463/romsons_maxx_face_protector_shield_gs_6111_0_1.jpg" alt="Romsons Maxx Face Protector Shield (GS-6111)"
            />
          </div>
          <p className="cart-para">Romsons Maxx Face Protector Shield (GS-6111)</p>
          <p className="cart-italic">Mkt: Romsons Scientific &amp; Surgical Pvt Ltd</p>
          <div className="price">
            <span className="cart-price">MRP:</span>
            <span className="cart-discount">Rs.210.00</span>
          </div>
          <button className="main-cart-btn edit-btn">Add to cart</button>
        </div>
        <div className="container">
          <div className="cart-img">
            <img
              src="https://www.netmeds.com/images/product-v1/150x150/958677/shake_handz_e_alcohol_hand_rub_with_flip_cap_500_ml_0_1.jpg" alt="Shake HandZ-E Alcohol Hand Rub With Flip Cap 500 ml"
            />
          </div>
          <p className="cart-para">Shake HandZ-E Alcohol Hand Rub With Flip Cap 500 ml</p>
          <p className="cart-italic">Mkt: Inventz Life Sciences</p>
          <div className="price">
            <span className="cart-price">MRP:</span>
            <span className="cart-discount">Rs.237.35</span>
          </div>
          <button className="main-cart-btn edit-btn">Add to cart</button>
        </div>
        <div className="container">
          <div className="cart-img">
            <img
              src="https://www.netmeds.com/images/product-v1/150x150/915649/accusure_pulse_oximeter_117144_0_1.jpg" alt="AccuSure Pulse Oximeter"
            />
          </div>
          <p className="cart-para">AccuSure Pulse Oximeter</p>
          <p className="cart-italic">Mkt: Microgene Diagnostic Systems Pvt Ltd</p>
          <div className="price">
            <span className="cart-price">MRP:</span>
            <span className="cart-discount">Rs.1999.00</span>
          </div>
          <button className="main-cart-btn edit-btn">Add to cart</button>
        </div>
        <div className="container">
          <div className="cart-img">
            <img
              src="https://www.netmeds.com/images/product-v1/150x150/957715/status_n95_cup_face_mask_white_pack_of_10_1s_0_0.jpg" alt="Status N95 Cup Face Mask - White (Pack of 10)"
            />
          </div>
          <p className="cart-para">Status N95 Cup Face Mask - White (Pack of 10)</p>
          <p className="cart-italic">Mkt: Chinar Forge Ltd.</p>
          <div className="price">
            <span className="cart-price">MRP:</span>
            <span className="cart-discount">Rs.3000.00</span>
          </div>
          <button className="main-cart-btn edit-btn">Add to cart</button>
        </div>
        <div className="container">
          <div className="cart-img">
            <img
              src="https://www.netmeds.com/images/product-v1/150x150/412801/dettol_disinfectant_liquid_menthol_cool_200_ml_0.jpg" alt="Dettol Disinfectant Liquid - Menthol Cool 200 ml"
            />
          </div>
          <p className="cart-para">Dettol Disinfectant Liquid - Menthol Cool 200 ml</p>
          <p className="cart-italic">Mkt: Reckitt Benckiser Healthcare India Private Limited</p>
          <div className="price">
            <span className="cart-price">MRP:</span>
            <span className="cart-discount">Rs.150.00</span>
          </div>
          <button className="main-cart-btn edit-btn">Add to cart</button>
        </div>
      {/* </div> */}
      </div>

    </div>
    
    
    </>

  )
}

export default Covid
