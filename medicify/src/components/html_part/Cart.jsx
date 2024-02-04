import React from "react";
import { Link } from "react-router-dom";
import '../css_part/Cart.css'

function Cart() {
  return (
    <>

    <div className="center">
      <div className="cart-link">
          <h1 className="cart-link-heading">Your cart is empty!</h1>
          <p>You have added zero items in the cart. Explore</p>
          <p> and add products you like!</p>
          <Link to="/health"><button className="link-cart-buttn">Click to Add Cart</button></Link>
      </div>
    </div>

    </>
  );
}

export default Cart;
