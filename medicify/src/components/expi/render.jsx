import React from 'react'
import { Medicify2 } from './productList'
import { Link } from 'react-router-dom'

function Render() {
  return (
    <>
    
        <div className='cart-collection'>
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
    
    </>
  )
}

export default Render
