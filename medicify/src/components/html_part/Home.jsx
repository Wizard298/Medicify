import React from 'react'
import '../css_part/Home.css'
import img1 from '../images/img1.avif'

function Home() {
  return (
    <>
    <div className="slide-img">
        <img className='silde-img-1'  src={img1} alt="Error" />
    </div>
    

    <div className="advertisement">
        <h1 className='trending-heading'>Trending Today</h1>
        <div className="trending-images">
            <div className='div-img2'>
                <img className='trending-img-1' src="https://mercury.akamaized.net/i/f4a8fba4fb508d23265120ce4b1712a8_58400_0.jpg" alt="Error" />
            </div>
            <div className='div-img2'>
                <img className='trending-img-1' src="https://mercury.akamaized.net/i/7599ef5d2dbf324dbe28aff4faae4207_58490_0.jpg" alt="Error" />
            </div>
            <div className='div-img2'>
                <img className='trending-img-1' src="https://mercury.akamaized.net/i/375696f882a491ee4c7f5fc50352345c_58496_0.jpg" alt="Error" />
            </div>
            <div className='div-img2'>
                <img className='trending-img-1' src="https://mercury.akamaized.net/i/38f3cd55c553ecaf82aa43e729ec2765_58424_0.jpg" alt="Error" />
            </div>
            <div className='div-img1'>
                <img className='trending-img-1' src="https://mercury.akamaized.net/i/84b2d992b0b8d74305fabf4dff5333fd_58505_0.jpg" alt="Error" />
            </div>
        </div>
    </div>


    <div className="fever-cart">
        <h1 className='fever-heading'>Treatments - Fever</h1>

        <div className="cart-collection">
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/45296/dolo_650_tablet_15s_35281_0_3.jpg"
                        alt="error"
                    />
                </div>
                <p className="cart-para-home">Dolo 650 Tablet 15'S</p>
                <p className="cart-italic-home">Mkt: Micro Labs Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP:</span>
                    <span className="cart-discount-home">Rs.30.70</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/340387/crocin_pain_relief_tablet_15s_41309_0_1.jpg" alt="Crocin Pain Relief Tablet 15'S"
                    />
                </div>
                <p className="cart-para-home">Crocin Pain Relief Tablet 15'S</p>
                <p className="cart-italic-home">Mkt: Glaxosmithkline Consumer Pvt Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.12.5</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/845449/disprin_regular_effervescent_tablet_10s_120878_0_1.jpg" alt="Disprin Regular Effervescent Tablet 10'S"
                    />
                </div>
                <p className="cart-para-home">Disprin Regular Effervescent Tablet 10'S</p>
                <p className="cart-italic-home">Mkt: Reckitt Benckiser Healthcare India Private Limited</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.20.00</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/409485/cofsils_lozenges_orange_10s_0_1.jpg" alt="Cofsils Lozenges - Orange 10's"
                    />
                </div>
                <p className="cart-para-home">Cofsils Lozenges - Orange 10's</p>
                <p className="cart-italic-home">Mkt: Cipla Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.25.41</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/14021/vicks_vaporub_50_ml_32625_0_1.jpg" alt="Vicks Vaporub 50 ml"
                    />
                </div>
                <p className="cart-para-home">Vicks Vaporub 50 ml</p>
                <p className="cart-italic-home">Mkt: Procter &amp; Gamble Hygiene And Health Care Limited</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.150.51</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
        </div>
    </div>



    <div className="health-concerns">
        <h1 className='health-heading' >Health Concerns</h1>

        <div className="health-images">
            <div className="health-img-1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg" alt="Weight Care"/>
                <p className='health-para'>Weight Care</p>
            </div>
            <div className="health-img-1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg" alt="Bone And Joint Pain"/>
                <p className='health-para'>Bone And Joint Pain</p>
            </div>
            <div className="health-img-1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg" alt="Cold And Fever"/>
                <p className='health-para'>Cold And Fever</p>
            </div>
            <div className="health-img-1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg" alt="Lung Care"/>
                <p className='health-para'>Lung Care</p>
            </div>
        </div>
    </div>


    <div className="fever-cart fitness">
        <h1 className='fever-heading'>Related to Fitness</h1>

        <div className="cart-collection">
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/814992/healthvit_fitness_bcaa_capsules_60_s_0.jpg" alt="HealthVit Fitness BCAA Capsules 60's"
                    />
                </div>
                <p className="cart-para-home">HealthVit Fitness BCAA Capsules 60's</p>
                <p className="cart-italic-home">Mkt: West Coast Pharmaceutical Works Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP:</span>
                    <span className="cart-discount-home">Rs.455.70</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/1004630/myfitness_chocolate_peanut_butter_crunchy_1250_gm_0_0.jpg" alt="Myfitness Chocolate Peanut Butter - Crunchy 1250 gm"
                    />
                </div>
                <p className="cart-para-home">Myfitness Chocolate Peanut Butter - Crunchy 1250 gm</p>
                <p className="cart-italic-home">Mkt: Tanvi Fitness Pvt Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.450</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/812844/muscleblaze_whey_gold_rich_milk_chocolate_1_kg_58178_0_6.jpg" alt="MuscleBlaze Whey Gold - Rich Milk Chocolate 1 kg"
                    />
                </div>
                <p className="cart-para-home">MuscleBlaze Whey Gold - Rich Milk Chocolate 1 kg</p>
                <p className="cart-italic-home">Mkt: Bright Lifecare Pvt Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.2500.00</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/1091133/protinex_powder_creamy_vanilla_flavour_jar_400_gm_559291_0_1.jpg" alt="Protinex Powder - Creamy Vanilla Flavour (Jar) 400 gm"
                    />
                </div>
                <p className="cart-para-home">Protinex Powder - Creamy Vanilla Flavour (Jar) 400 gm</p>
                <p className="cart-italic-home">Mkt: NUTRICIA INTERNATIONAL Pvt Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.25.41</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/927986/wellbeing_nutrition_organic_apple_cider_vinegar_flavoured_500_ml_148366_0_2.jpg" alt="Wellbeing Nutrition Organic Apple Cider Vinegar - Flavoured 500 ml"
                    />
                </div>
                <p className="cart-para-home">Wellbeing Nutrition Organic Apple Cider Vinegar - Flavoured 500 ml</p>
                <p className="cart-italic-home">Mkt: Nutritionalab Pvt Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.220.51</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
        </div>
    </div>


    <div className="categories">
        <h1 className='categories-heading'>Categories in Focus</h1>

        <div className="cat-images">
            <div className="cat-img1">
                <img src="https://www.netmeds.com/images/category/prod/thumb/ayurvedic.png" alt="" />
            </div>
            <div className="cat-img1">
                <img src="https://www.netmeds.com/images/category/prod/thumb/sports_supplements.png" alt="" />
            </div>
            <div className="cat-img1">
                <img src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_4.png"  alt="" />
            </div>
            <div className="cat-img1">
                <img src="https://www.netmeds.com/images/category/prod/thumb/orthopaedics.png" alt="" />
            </div>
        </div>
    </div>

    {/* Personal Care */}
    <div className="fever-cart personal-care">
        <h1 className='fever-heading'>Personal Care</h1>

        <div className="cart-collection">
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/1002784/minimalist_vitamin_c_face_serum_30_ml_297320_0_6.jpg" alt="Minimalist Vitamin C Face Serum 30 ml"
                    />
                </div>
                <p className="cart-para-home">Minimalist Vitamin C Face Serum 30 ml</p>
                <p className="cart-italic-home">Mkt: Uprising Science Pvt Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP:</span>
                    <span className="cart-discount-home">Rs.500.75</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/829099/sensodyne_repair_protect_toothpaste_100_gm_0_2.jpg" alt="Sensodyne Repair &amp; Protect Toothpaste 100 gm"
                    />
                </div>
                <p className="cart-para-home">Sensodyne Repair &amp; Protect Toothpaste 100 gm</p>
                <p className="cart-italic-home">Mkt: Gsk Consumer Healthcare</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.230</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/15129/dettol_instant_hand_sanitizer_original_50_ml_33218_0_1.jpg" alt="Dettol Instant Hand Sanitizer - Original 50 ml"
                    />
                </div>
                <p className="cart-para-home">Dettol Instant Hand Sanitizer - Original 50 ml</p>
                <p className="cart-italic-home">Mkt: Reckitt Benckiser Healthcare India Private Limited</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.24.00</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/323943/abzorb_dusting_powder_100gm_39756_0_2.jpg" alt="Abzorb Dusting Powder 100gm"
                    />
                </div>
                <p className="cart-para-home">Abzorb Dusting Powder 100gm</p>
                <p className="cart-italic-home">Mkt: Sun Pharmaceutical Industries Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.110.50</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-img-home">
                    <img
                        src="https://www.netmeds.com/images/product-v1/150x150/859562/mamaearth_tea_tree_natural_face_wash_100_ml_0.jpg" alt="Mamaearth Tea Tree Face Wash - Tea Tree &amp; Neem 100 ml"
                    />
                </div>
                <p className="cart-para-home">Mamaearth Tea Tree Face Wash - Tea Tree &amp; Neem 100 ml</p>
                <p className="cart-italic-home">Mkt: Honasa Consumer Ltd</p>
                <div className="price-home">
                    <span className="cart-price-home">MRP: </span>
                    <span className="cart-discount-home">Rs.220.51</span>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
        </div>
    </div>

    <div className="brand-in-focus">
        <h1 className='brand-heading'>Brand in Focus</h1>

        <div className="brand-images">
            <div className="health-img-1 brand-img1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14" alt="dabur"/>
                <p className='health-para'>Dabur</p>
            </div>
            <div className="health-img-1 brand-img1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/omnigel.jpg?v=14" alt="Omnigel"/>
                <p className='health-para'>Omnigel</p>
            </div>
            <div className="health-img-1 brand-img1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/volini.jpg?v=14" alt="Volini"/>
                <p className='health-para'>Volini</p>
            </div>
            <div className="health-img-1 brand-img1">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/cetaphil.jpg?v=14" alt="Cetaphil"/>
                <p className='health-para'>Cetaphil</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home;
