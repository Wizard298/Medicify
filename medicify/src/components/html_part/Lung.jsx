import React from 'react'
import '../css_part/Medicine.css'
import { Link } from 'react-router-dom'
import List from './List'

function Lung() {
  return (
    
    
    <>

    <h1 className='list-heading'>Lung Care</h1>

    <div className="box">

        <List/>

        <div className='box2'>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/363656/pankajakasthuri_breathe_easy_granules_400_gm_43929_0_2.jpg" alt="Pankajakasthuri Breathe Easy Granules 400 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                    <p className="cart-para">Pankajakasthuri Breathe Easy Granules 400 gm</p>
                    <p className="cart-italic">Mkt: Pankajakasthuri Herbals India Pvt Ltd</p>
                    <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.298.80</span>
                    </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/410105/pankajakasthuri_breathe_easy_syrup_200_ml_0.jpg" alt="Pankajakasthuri Breathe Easy Syrup 200 ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Pankajakasthuri Breathe Easy Syrup 200 ml</p>
                <p className="cart-italic">Mkt: Pankajakasthuri Herbals India Pvt Ltd</p>
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
                    src="https://www.netmeds.com/images/product-v1/150x150/913664/dr_morepen_breathefree_vaporizer_vp_06_403240_0_0.jpg" alt="Dr.Morepen Breathefree Vaporizer (VP 06)"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Dr.Morepen Breathefree Vaporizer (VP 06)</p>
                <p className="cart-italic">Mkt: Morepen Laboratories Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.247.50</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1041191/pure_nutrition_lung_detox_with_vitamin_c_grape_seed_extract_800_mg_veg_capsule_60s_400901_0_1.jpg" alt="Pure Nutrition Lung Detox with Vitamin C &amp; Grape Seed Extract 800 mg Veg Capsule 60's"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Pure Nutrition Lung Detox with Vitamin C</p>
                <p className="cart-italic">Mkt: Herbs Nutriproducts Private Limited</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.2427.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/994901/romsons_kare_n95_respirator_mask_child_gs_6103c_1s_0_0.jpg" alt="Romsons Kare N95 Respirator Mask Child (GS - 6103C) 1's"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Romsons Kare N95 Respirator Mask Child</p>
                <p className="cart-italic">Mkt: Romsons Group Private Limited</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.131.76</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
        </div>
    </div>

    </>


  )
}

export default Lung
