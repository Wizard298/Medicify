import React from 'react'
import '../css_part/Medicine.css'
import { Link } from 'react-router-dom'
import List from './List'

function BoneJoint() {
  return (

    <>

    <h1 className='list-heading'>Bone and Joint Pain</h1>

    <div className="box">

        <List/>

        <div className='box2'>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1027656/truuth_shoulder_arm_sling_l_472641_0_3.jpg" alt="Truuth Shoulder Arm Sling (L)"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                    <p className="cart-para">Truuth Shoulder Arm Sling (L)</p>
                    <p className="cart-italic">Mkt: Reliance Retail Limited</p>
                    <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.22.80</span>
                    </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1027635/truuth_knee_cap_xl_472631_0_5.jpg" alt="Truuth Knee Cap (XL)"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Truuth Knee Cap (XL)</p>
                <p className="cart-italic">Mkt: Reliance Retial LTD</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.96.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/15180/moov_pain_relief_specialist_cream_50_gm_0.jpg" alt="Moov Pain Relief Specialist Cream 50 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Moov Pain Relief Specialist Cream 50 gm</p>
                <p className="cart-italic">Mkt: Reckitt Benckiser Healthcare India Private Limited</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.205.50</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/860331/amrutanjan_advanced_back_pain_roll_on_50_ml_0_0.jpg" alt="Amrutanjan Advanced Back Pain + Roll-On 50 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Amrutanjan Advanced Back Pain </p>
                <p className="cart-italic">Mkt: Amrutanajan LTD</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.80.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/829100/iodex_body_pain_expert_40_gm_0_1.jpg" alt="Iodex Body Pain Expert 40 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Iodex Body Pain Expert 40 gm</p>
                <p className="cart-italic">Mkt: Gsk Consumer Healthcare</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.170.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/407464/tynor_ankle_support_neoprene_one_size_j_12_0_2.jpg" alt="Tynor Ankle Support (Neoprene) (One Size) (J 12)"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Tynor Ankle Support</p>
                <p className="cart-italic">Mkt: Tynor Orthotics Private Limited</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.772.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/964619/tynor_walker_boot_air_m_d_51_0_0.jpg" alt="Tynor Walker Boot Air (M) (D 51)"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Tynor Walker Boot Air (M) (D 51)</p>
                <p className="cart-italic">Mkt: Tynor Orthotics Private Limited</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.3160.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
        </div>
    </div>

    </>


  )
}

export default BoneJoint
