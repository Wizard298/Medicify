import React from "react";
import { Link } from "react-router-dom";
import '../css_part/Cart.css'

function Cart() {
  return (
    <>

    <div className="cart-link">
        <h1 className="cart-link-heading">Your cart is empty!</h1>
        <p>You have added zero items in the cart. Explore</p>
        <p> and add products you like!</p>
        <button className="link-cart-buttn"><Link to="/health">Click to Add Cart</Link></button>
    </div>

    </>
  );
}

export default Cart;
