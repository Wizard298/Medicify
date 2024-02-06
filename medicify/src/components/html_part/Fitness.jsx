import React from 'react'
import '../css_part/Medicine.css'
import List from './List'
import { Link } from 'react-router-dom'

function Fitness() {
  return (
    <>

    <h1 className='list-heading'>Fitness</h1>

    <div className="box">

        <List/>

        <div className='box2'>
        {/* <div className="cart-main"> */}
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/813896/optimum_nutrition_on_100_whey_gold_standard_powder_double_rich_chocolate_2_lb_0_2.jpg" alt="Optimum Nutrition (ON) 100% Whey Gold Standard Powder - Double Rich Chocolate 2 lb"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para"> Whey Gold Standard Powder</p>
                <p className="cart-italic">Mkt: Fitness Private Limited</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.24.75</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/406441/glucon_d_nimbu_pani_powder_200_gm_0.jpg" alt="Glucon-D Nimbu Pani Powder 200 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Glucon-D Nimbu Pani Powder 200 gm</p>
                <p className="cart-italic">Mkt: Heinz India Pvt Ltd</p>
                <div className="price">
                <span className="cart-price">MRP: </span>
                <span className="cart-discount">Rs.80.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1091133/protinex_powder_creamy_vanilla_flavour_jar_400_gm_559291_0_1.jpg" alt="Protinex Powder - Creamy Vanilla Flavour (Jar) 400 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Protinex Powder - Creamy Vanilla Flavour (Jar) 400 gm</p>
                <p className="cart-italic">Mkt: NUTRICIA INTERNATIONAL Pvt Ltd</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.607.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30s_50155_0_1.jpg" alt="Revital H Woman Tablet 30'S"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Revital H Woman Tablet 30'S</p>
                <p className="cart-italic">Mkt: Sun Pharmaceutical Industries Ltd</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.306.35</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1028526/neuherbs_skin_collagen_booster_powder_with_hyaluronic_acid_210_g_354986_0_1.jpg" alt="Neuherbs Skin Collagen Booster Powder with Hyaluronic Acid 210 g"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Neuherbs Skin Collagen Booster Powder with Hyaluronic Acid 210 g</p>
                <p className="cart-italic">Mkt: Global Healthfit Retail (India) LLP</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.759.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/812844/muscleblaze_whey_gold_rich_milk_chocolate_1_kg_58178_0_6.jpg" alt="MuscleBlaze Whey Gold - Rich Milk Chocolate 1 kg"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">MuscleBlaze Whey Gold - Rich Milk Chocolate 1 kg</p>
                <p className="cart-italic">Mkt:Bright Lifecare Pvt Ltd </p>
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
                    src="https://www.netmeds.com/images/product-v1/150x150/1067468/oziva_organic_plant_protein_powder_500_gm_493190_0_0.jpg" alt="Oziva Organic Plant Protein Powder 500 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Oziva Organic Plant Protein Powder 500 gm</p>
                <p className="cart-italic">Mkt: Zywie Ventures Private Limited</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.150.00</span>
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

export default Fitness
