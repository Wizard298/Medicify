import React from 'react'
import '../css_part/Home.css'
import '../css_part/ImgSlide.css'
import { Link } from 'react-router-dom'
import img1 from '../images/img1.avif'
import img2 from '../images/img2.avif'
import img3 from '../images/img3.avif'
import img4 from '../images/img4.jpg'
import { Medicify1, Medicify2, Medicify3 } from '../expi/productList'

function Home() {
  return (
    <>
    <div className='animation-slide'>
        <figure>
            <div className="slide-img">
                <img className='silde-img-1'  src={img1} alt="Error" />
            </div>
            <div className="slide-img">
                <img className='silde-img-1'  src={img2} alt="Error" />
            </div>
            <div className="slide-img">
                <img className='silde-img-1'  src={img3} alt="Error" />
            </div>
            <div className="slide-img">
                <img className='silde-img-1'  src={img4} alt="Error" />
            </div>
        </figure>
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
        {Medicify1.map(product => (
            <React.Fragment key={product.id}>
                <div className="cart-container">
                    <div className="cart-img-home">
                        <Link to={`/addtocart/${product.id}`}>
                            <img
                                src={product.img}
                                alt={product.name}
                                />
                        </Link>
                    </div>
                    <Link to={`/addtocart/${product.id}`}>
                        <p className="cart-para-home">{product.name}</p>
                        <p className="cart-italic-home">{product.description}</p>
                        <div className="price-home">
                            <span className="cart-price-home">MRP:</span>
                            <span className="cart-discount-home">Rs.{product.price}</span>
                        </div>
                    </Link>
                    <div className='edit-cart-btn-home'>
                        <button className="main-cart-btn-home">Add to cart</button>
                    </div>
                </div>
            </React.Fragment>
        ))}    
        </div>
    </div>



    <div className="health-concerns">
        <h1 className='health-heading' >Health Concerns</h1>

        <div className="health-images">
            <div className="health-img-1">
            <Link to="/health/weight">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg" alt="Weight Care"/>
                <p className='health-para'>Weight Care</p>
            </Link>
            </div>
            <div className="health-img-1">
            <Link to="/health/joint">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg" alt="Bone And Joint Pain"/>
                <p className='health-para'>Bone And Joint Pain</p>
            </Link>
            </div>
            <div className="health-img-1">
            <Link to="/health">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg" alt="Cold And Fever"/>
                <p className='health-para'>Cold And Fever</p>
            </Link>
            </div>
            <div className="health-img-1">
            <Link to="/health/lung">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg" alt="Lung Care"/>
                <p className='health-para'>Lung Care</p>
            </Link>
            </div>
        </div>
    </div>


    <div className="fever-cart fitness">
        <h1 className='fever-heading'>Related to Fitness</h1>

        <div className="cart-collection">
        {Medicify2.map(product => (
            <React.Fragment key={product.id}>
                <div className="cart-container">
                    <div className="cart-img-home">
                        <Link to={`/addtocart/${product.id}`}>
                            <img
                                src={product.img}
                                alt={product.name}
                                />
                        </Link>
                    </div>
                    <Link to={`/addtocart/${product.id}`}>
                        <p className="cart-para-home">{product.name}</p>
                        <p className="cart-italic-home">{product.description}</p>
                        <div className="price-home">
                            <span className="cart-price-home">MRP:</span>
                            <span className="cart-discount-home">Rs.{product.price}</span>
                        </div>
                    </Link>
                    <div className='edit-cart-btn-home'>
                        <button className="main-cart-btn-home">Add to cart</button>
                    </div>
                </div>
            </React.Fragment>
        ))}
        </div>
    </div>


    <div className="categories">
        <h1 className='categories-heading'>Categories in Focus</h1>

        <div className="cat-images">
            <div className="cat-img1">
                <Link to="/health/ayurvedic">
                    <img src="https://www.netmeds.com/images/category/prod/thumb/ayurvedic.png" alt="" />
                </Link>
            </div>
            <div className="cat-img1">
                <Link to="/health/fitness">
                    <img src="https://www.netmeds.com/images/category/prod/thumb/sports_supplements.png" alt="" />
                </Link> 
            </div>
            <div className="cat-img1">
                <Link to="/health/care">
                    <img src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_4.png"  alt="" />
                </Link>
            </div>
            <div className="cat-img1">
                <Link to="/health/joint">
                    <img src="https://www.netmeds.com/images/category/prod/thumb/orthopaedics.png" alt="" />
                </Link>
            </div>
        </div>
    </div>

    {/* Personal Care */}
    <div className="fever-cart personal-care">
        <h1 className='fever-heading'>Personal Care</h1>

        <div className="cart-collection">
        {Medicify3.map(product => (
            <React.Fragment key={product.id}>
                <div className="cart-container">
                    <div className="cart-img-home">
                        <Link to={`/addtocart/${product.id}`}>
                            <img
                                src={product.img}
                                alt={product.name}
                                />
                        </Link>
                    </div>
                    <Link to={`/addtocart/${product.id}`}>
                        <p className="cart-para-home">{product.name}</p>
                        <p className="cart-italic-home">{product.description}</p>
                        <div className="price-home">
                            <span className="cart-price-home">MRP:</span>
                            <span className="cart-discount-home">Rs.{product.price}</span>
                        </div>
                    </Link>
                    <div className='edit-cart-btn-home'>
                        <button className="main-cart-btn-home">Add to cart</button>
                    </div>
                </div>
            </React.Fragment>
        ))}
        </div>
    </div>

    <div className="brand-in-focus">
        <h1 className='brand-heading'>Brand in Focus</h1>

        <div className="brand-images">
            <div className="health-img-1 brand-img1">
            <Link to="/health/fitness">
                <img src="https://www.netmeds.com/images/product-v1/150x150/1004630/myfitness_chocolate_peanut_butter_crunchy_1250_gm_0_0.jpg" alt="Peanut Butter"/>
                <p className='health-para'>Peanut Butter</p>
            </Link>
            </div>
            <div className="health-img-1 brand-img1">
            <Link to="/health/CardiacCare">
                <img src="https://www.netmeds.com/images/product-v1/150x150/927986/wellbeing_nutrition_organic_apple_cider_vinegar_flavoured_500_ml_148366_0_2.jpg" alt="Wellbeing Nutrition Organic Apple Cider Vinegar - Flavoured 500 ml"/>
                <p className='health-para'>Well Nutrition</p>
            </Link>
            </div>
            <div className="health-img-1 brand-img1">
            <Link to="/health">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/volini.jpg?v=14" alt="Volini"/>
                <p className='health-para'>Volini</p>
            </Link>
            </div>
            <div className="health-img-1 brand-img1">
            <Link to="/health">
                <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/cetaphil.jpg?v=14" alt="Cetaphil"/>
                <p className='health-para'>Cetaphil</p>
            </Link>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home;
