import React from 'react'
import '../css_part/Medicine.css'
import { Link } from 'react-router-dom'
import List from './List'

function Caring() {
  return (
    

    <>

    <h1 className='list-heading'>Personal Care</h1>

    <div className="box">

        <List/>

        <div className='box2'>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1002784/minimalist_vitamin_c_face_serum_30_ml_297320_0_6.jpg" alt="Minimalist Vitamin C Face Serum 30 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                    <p className="cart-para">Minimalist Vitamin C Face Serum 30 ml</p>
                    <p className="cart-italic">Mkt: Uprising Science Pvt Ltd</p>
                    <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.500.75</span>
                    </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/323943/abzorb_dusting_powder_100gm_39756_0_2.jpg" alt="Abzorb Dusting Powder 100gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Abzorb Dusting Powder 100gm</p>
                <p className="cart-italic">Mkt: Sun Pharmaceutical Industries Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.120.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/952497/garnier_skin_naturals_bright_complete_vitamin_c_uv_serum_cream_45_gm_203328_0_3.jpg" alt="Garnier Bright Complete 3X Vitamin C+Lemon Serum Cream UV 45gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Garnier Bright Complete 3X Vitamin C+Lemon Serum Cream UV 45gm</p>
                <p className="cart-italic">Mkt: Loreal India Pvt Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.179.50</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/838245/vaseline_intensive_care_cocoa_glow_body_lotion_400_ml_105722_0_1.jpg" alt="Vaseline Intensive Care Cocoa Glow Body Lotion 400 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Vaseline Intensive Care Cocoa Glow Body Lotion 400 ml</p>
                <p className="cart-italic">Mkt: Hindustan Unilever Limited</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.348.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1059239/cetaphil_moisturizing_lotion_sensitive_skin_250_ml_461837_0_0.jpg" alt="Cetaphil Moisturizing Lotion Normal to Combination - Sensitive Skin 250 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Cetaphil Moisturizing Lotion</p>
                <p className="cart-italic">Mkt: Galderma India Pvt Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.704.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/827262/bioderma_atoderm_intensive_baume_200_ml_65743_0_1.jpg" alt="Bioderma Atoderm Intensive Baume 200 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Bioderma Atoderm Intensive Baume 200 ml</p>
                <p className="cart-italic">Mkt: Naos Skin Care India Pvt Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.1513.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/411653/bioderma_sebium_hydra_moisturizer_for_acne_40_ml_53318_0_2.jpg" alt="Bioderma Sebium Hydra Moisturizer for Acne 40 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Bioderma Sebium Hydra Moisturizer for Acne 40 ml</p>
                <p className="cart-italic">Mkt: Naos Skin Care India Pvt Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.896.25</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
        </div>
    </div>

    </>



  )
}

export default Caring
