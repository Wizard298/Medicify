import React from 'react'
import '../css_part/Medicine.css'
import { Link } from 'react-router-dom'
import List from './List'

function Weight() {
  return (
    
    <>

    <h1 className='list-heading'>Weight Care</h1>

    <div className="box">

        <List/>

        <div className='box2'>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/894636/dr_vaidyas_herbobuild_capsule_30s_0_2.jpg" alt="Dr. Vaidya's Herbobuild Capsule 30's"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                    <p className="cart-para">Dr. Vaidya's Herbobuild Capsule 30's</p>
                    <p className="cart-italic">Mkt: Herbolab India Pvt Ltd</p>
                    <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.254.80</span>
                    </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/966760/patanjali_nutrela_weight_gain_powder_banana_500_gm_0_0.jpg" alt="Patanjali Nutrela Weight Gain Powder - Banana 500 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Patanjali Nutrela Weight Gain Powder</p>
                <p className="cart-italic">Mkt: Ruchi Soya Industries Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.495.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/821279/kapiva_get_slim_juice_1_ltr_61046_0_9.jpg" alt="Kapiva Get Slim Juice 1 ltr"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Kapiva Get Slim Juice 1 ltr</p>
                <p className="cart-italic">Mkt: Adret Retail Pvt Ltd (Kapiva)</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.549.50</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/902871/gnc_pro_performance_weight_gainer_double_chocolate_flavour_3_kg_0_0.jpg" alt="GNC Pro Performance Weight Gainer - Double Chocolate Flavour 3 kg"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">GNC Pro Performance Weight Gainer</p>
                <p className="cart-italic">Mkt: Guardian Healthcare Services Pvt Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.2204.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/889022/pro360_adult_weight_gainer_nutritional_powder_chocolate_flavour_250_gm_0_2.jpg" alt="Pro360 Adult Weight Gainer Nutritional Powder - Chocolate Flavour 250 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Pro360 Adult Weight Gainer Nutritional Powder</p>
                <p className="cart-italic">Mkt: Gmn Healthcare Pvt Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.550.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/889017/pro360_slim_nutritional_powder_choco_vanilla_flavour_500_gm_0_2.jpg" alt="Pro360 Slim Nutritional Powder - Choco Vanilla Flavour 500 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Pro360 Slim Nutritional Powder</p>
                <p className="cart-italic">Mkt: Gmm Healthcare Pvt Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.139.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/889018/pro360_slim_nutritional_powder_strawberry_flavour_500_gm_0_2.jpg" alt="Pro360 Slim Nutritional Powder - Strawberry Flavour 500 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Pro360 Slim Nutritional Powder</p>
                <p className="cart-italic">Mkt: Gmm Healthcare Pvt LTD</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.580.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
        </div>
    </div>

    </>
    
  )
}

export default Weight
