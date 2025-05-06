import React from 'react'
import '../../css_part/Health.css'
import '../../css_part/Medicine.css'
import { Link } from 'react-router-dom'

import List from '../List'
import { Medicine } from '../../expi/productList'


function Health() {
  return (

    <>

    {/* <Navbar/> */}

    <h1 className='list-heading'>Cold and Fever</h1>

    <div className="box">

      <List/>

      <div className="box2">

      {Medicine.map(product => (
            <React.Fragment key={product.id}>
                <div className="container">
                    <div className="cart-img">
                        <Link to={`/addtocart/${product.id}`}>
                            <img
                                src={product.img}
                                alt={product.name}
                                />
                        </Link>
                    </div>
                    <Link to={`/addtocart/${product.id}`}>
                        <p className="cart-para">{product.name}</p>
                        <p className="cart-italic">{product.description}</p>
                        <div className="price">
                            <span className="cart-price">MRP:</span>
                            <span className="cart-discount">Rs.{product.price}</span>
                        </div>
                    </Link>
                    <div className='edit-cart-btn-home'>
                        <button className="main-cart-btn-home edit-btn-home">Add to cart</button>
                    </div>
                </div>
            </React.Fragment>
        ))}

      </div>

    </div>

    
    
    </>


  )
}

export default Health
