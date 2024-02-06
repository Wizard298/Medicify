import React from 'react'
import '../css_part/Medicine.css'
import List from './List'
import { Link } from 'react-router-dom'

function CardiacCare() {
  return (
    <>

    <h1 className='list-heading'>Cardiac-Care</h1>

    
    <div className="box">

        <List/>

        <div className='box2'>
        {/* <div className="cart-main"> */}
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/406031/patanjali_honey_500_gm_0.jpg" alt="Patanjali Honey 500 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Patanjali Honey 500 gm</p>
                <p className="cart-italic">Mkt: Patanjali Ayurved Ltd</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.205.75</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/824165/planet_ayurveda_total_heart_support_capsules_60_s_0.jpg" alt="Planet Ayurveda Total Heart Support Capsules 60's"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Planet Ayurveda Total Heart Support Capsules 60's</p>
                <p className="cart-italic">Mkt: Planet Ayurveda</p>
                <div className="price">
                <span className="cart-price">MRP: </span>
                <span className="cart-discount">Rs.1215.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/821278/kapiva_wild_amla_juice_1_ltr_61043_0_7.jpg" alt="Kapiva Wild Amla Juice 1 ltr"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Kapiva Wild Amla Juice 1 ltr</p>
                <p className="cart-italic">Mkt: Adret Retail Pvt Ltd (Kapiva)</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.248.17</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/857452/accusure_blood_pressure_monitor_ts_0.jpg" alt="AccuSure Blood Pressure Monitor - TS"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">AccuSure Blood Pressure Monitor - TS</p>
                <p className="cart-italic">Mkt: Microgene Diagnostic Systems Pvt Ltd</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.1416.35</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/858560/inlife_apple_cider_vinegar_with_garlic_ginger_lemon_honey_mother_of_vinegar_500_ml_78282_0_1.jpg" alt="INLIFE Apple Cider Vinegar with Garlic Ginger Lemon Honey &amp; Mother of Vinegar 500 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">INLIFE Apple Cider Vinegar</p>
                <p className="cart-italic">Mkt: Inlife Pharma Pvt Ltd</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.478.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                     src="https://www.netmeds.com/images/product-v1/150x150/858551/inlife_heart_care_capsules_60_s_0.jpg" alt="INLIFE Heart Care Capsules 60's"
                     />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">INLIFE Heart Care Capsules 60's</p>
                <p className="cart-italic">Mkt: Inlife Pharma Pvt Ltd </p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.2659.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/927986/wellbeing_nutrition_organic_apple_cider_vinegar_flavoured_500_ml_148366_0_2.jpg" alt="Wellbeing Nutrition Organic Apple Cider Vinegar - Flavoured 500 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Wellbeing Nutrition Organic Apple</p>
                <p className="cart-italic">Mkt: Nutritionalab Pvt Ltd</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.440.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
        {/* </div> */}
        </div>

    </div>


    </>
  )
}

export default CardiacCare
