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
                    src="https://www.netmeds.com/images/product-v1/150x150/829099/sensodyne_repair_protect_toothpaste_100_gm_0_2.jpg" alt="Sensodyne Repair &amp; Protect Toothpaste 100 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Sensodyne Repair &amp; Protect Toothpaste 100 gm</p>
                <p className="cart-italic">Mkt: Gsk Consumer Healthcare</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.230.00</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/388215/volini_spray_100gm_46243_0_2.jpg" alt="Volini Spray 100gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Volini Spray 100gm</p>
                <p className="cart-italic">Mkt: Sun Pharmaceutical Industries Ltd</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.272.50</span>
                </div>
                </Link>
                <Link to="/addtocart"> <button className="main-cart-btn-home edit-btn-home">Add to cart</button></Link>
            </div>
            <div className="container">
                <div className="cart-img">
                <Link to="/addtocart">
                    <img
                    src="https://www.netmeds.com/images/product-v1/150x150/896035/digene_acidity_gas_relief_tablets_mint_flavour_15s_85679_0_3.jpg" alt="Digene Acidity &amp; Gas Relief Tablets - Mint Flavour 15's"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Digene Acidity &amp; Gas Relief Tablets - Mint Flavour 15's</p>
                <p className="cart-italic">Mkt: CIPLA HEALTH LTD</p>
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
                    src="https://www.netmeds.com/images/product-v1/150x150/828337/cetaphil_oily_skin_cleanser_125ml_120194_0_1.jpg" alt="Cetaphil Oily Skin Cleanser 125ml"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Cetaphil Oily Skin Cleanser 125ml</p>
                <p className="cart-italic">Mkt: Galderma India Pvt Ltd</p>
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
                    src="https://www.netmeds.com/images/product-v1/150x150/12787/eno_fruit_salt_powder_orange_flavour_100_gm_0_1.jpg" alt="Eno Fruit Salt Powder - Orange Flavour 100 gm"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Eno Fruit Salt Powder</p>
                <p className="cart-italic">Mkt: ENO LTD</p>
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
                    src="https://www.netmeds.com/images/product-v1/150x150/1023384/strepsils_lozenges_ginger_lemon_free_24_lozenges_200s_0_0.jpg" alt="Strepsils Lozenges - Ginger &amp; Lemon 200's + 24's Free"
                    />
                </Link>
                </div>
                <Link to="/addtocart">
                <p className="cart-para">Strepsils Lozenges - Ginger &amp; Lemon 200's + 24's Free</p>
                <p className="cart-italic">Mkt: Strepsils Health LTD</p>
                <div className="price">
                    <span className="cart-price">Best Price</span>
                    <span className="cart-discount">Rs.150.00</span>
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
