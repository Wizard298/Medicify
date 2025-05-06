import React from 'react'
import '../../css_part/Medicine.css'
import { Link } from 'react-router-dom'
import List from '../List'
import { Diabetes1 } from '../../expi/productList'

function Diabetes() {
  return (

    <>

    <h1 className='list-heading'>Diabetes</h1>
    
    <div className="box">

      <List/>

      <div className='box2'>
      {Diabetes1.map(product => (
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

export default Diabetes
