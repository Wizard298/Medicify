import React from 'react'
import '../css_part/Medicine.css'
import List from './List'

function Ayurvedic() {
  return (
    <>

    <h1 className='list-heading'>Ayurvedic</h1>
    
    <div className="box">

        <List/>

        <div className='box2'>
        {/* <div className="cart-main"> */}
            <div className="container">
                <div className="cart-img">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/821307/kapiva_wheat_grass_juice_1_ltr_61053_0_6.jpg" alt="Kapiva Wheat Grass Juice 1 ltr"
                />
                </div>
                <p className="cart-para"> Kapiva Wheat Grass Juice 1 ltr</p>
                <p className="cart-italic">Mkt: Adret Retail Pvt Ltd (Kapiva)</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.449.75</span>
                </div>
                <button className="main-cart-btn edit-btn">Add to cart</button>
            </div>
            <div className="container">
                <div className="cart-img">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/921411/lama_phalatrikadi_kwath_syrup_450_ml_0_0.jpg" alt="Lama Phalatrikadi Kwath Syrup 450 ml"
                />
                </div>
                <p className="cart-para">Lama Phalatrikadi Kwath Syrup 450 ml</p>
                <p className="cart-italic">Mkt: Lama Pharmaceuticals</p>
                <div className="price">
                <span className="cart-price">MRP: </span>
                <span className="cart-discount">Rs.110.00</span>
                </div>
                <button className="main-cart-btn edit-btn">Add to cart</button>
            </div>
            <div className="container">
                <div className="cart-img">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/921409/lama_isobael_granules_200_gm_0_0.jpg" alt="Lama Isobael Granules 200 gm"
                />
                </div>
                <p className="cart-para">Lama Isobael Granules 200 gm</p>
                <p className="cart-italic">Mkt: Lama Pharmaceuticals</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.238.00</span>
                </div>
                <button className="main-cart-btn edit-btn">Add to cart</button>
            </div>
            <div className="container">
                <div className="cart-img">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/410105/pankajakasthuri_breathe_easy_syrup_200_ml_0.jpg" alt="Pankajakasthuri Breathe Easy Syrup 200 ml"
                />
                </div>
                <p className="cart-para">Pankajakasthuri Breathe Easy Syrup 200 ml</p>
                <p className="cart-italic">Mkt: Pankajakasthuri Herbals India Pvt Ltd</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.165.35</span>
                </div>
                <button className="main-cart-btn edit-btn">Add to cart</button>
            </div>
            <div className="container">
                <div className="cart-img">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/1042877/truuth_ashwagandha_500mg_capsule_60s_472658_0_5.jpg" alt="Truuth Ashwagandha 500mg Capsule 60's"
                />
                </div>
                <p className="cart-para">Truuth Ashwagandha 500mg Capsule 60's</p>
                <p className="cart-italic">Mkt: Reliance Retail Limited</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.539.00</span>
                </div>
                <button className="main-cart-btn edit-btn">Add to cart</button>
            </div>
            <div className="container">
                <div className="cart-img">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/823671/baidyanath_chyawanprash_special_2_kg_0.jpg" alt="Baidyanath Chyawanprash Special 2 kg"
                />
                </div>
                <p className="cart-para">Baidyanath Chyawanprash Special 2 kg</p>
                <p className="cart-italic">Mkt: Shree Baidyanath Ayurved Bhawan Pvt Ltd </p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.731.00</span>
                </div>
                <button className="main-cart-btn edit-btn">Add to cart</button>
            </div>
            <div className="container">
                <div className="cart-img">
                <img
                    src="https://www.netmeds.com/images/product-v1/150x150/824146/planet_ayurveda_immune_booster_capsules_60_s_0.jpg" alt="Planet Ayurveda Immune Booster Capsules 60's"
                />
                </div>
                <p className="cart-para">Planet Ayurveda Immune Booster Capsules 60's</p>
                <p className="cart-italic">Mkt: Planet Ayurveda</p>
                <div className="price">
                <span className="cart-price">MRP:</span>
                <span className="cart-discount">Rs.1215.00</span>
                </div>
                <button className="main-cart-btn edit-btn">Add to cart</button>
            </div>
        {/* </div> */}
        </div>

    </div>

    
    </>
  )
}

export default Ayurvedic;
