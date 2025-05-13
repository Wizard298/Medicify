import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css_part/Cart.css";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "./Cart";

function CartPage() {
  const { state, addToCart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("medicify_user");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setEmail(parsedUser.email);
    } else {
      navigate("/");
    }
  }, [navigate]);


  const filterItems = state.item.filter((product) => product.cartAdded === true);
  console.log(filterItems);

  let totalAmount = 0;
  filterItems.map((product) => (totalAmount += product.price));

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  useEffect(() => {
    const isCheckoutInProgress = localStorage.getItem("isCheckoutInProgress");
    const isOnCartPage = window.location.pathname === "/cart";
  
    if (isCheckoutInProgress && isOnCartPage) {
      alert("You returned without completing the payment.");
      localStorage.removeItem("isCheckoutInProgress");
    }
  }, []);
  

  // payment logic
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/payment/create-checkout-session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filterItems, email, totalAmount }),
      }
    );

    const session = await response.json();
    localStorage.setItem("isCheckoutInProgress", "true");
    stripe.redirectToCheckout({ sessionId: session.id });
  };


  return (
    <>
      {filterItems.length === 0 ? (
        <div className="center">
          <div className="cart-link">
            <h1 className="cart-link-heading">Your cart is empty!</h1>
            <p>You have added zero items in the cart. Explore</p>
            <p> and add products you like!</p>
            <Link to="/health">
              <button className="link-cart-buttn">Click to Add Cart</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-page-container">
          <h1 className="cart-page-title">Your Cart Items</h1>

          <div className="cart-page-summary">
            <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
            <button className="clear-cart-page-btn proceed-btn" onClick={handleCheckout}>
              Proceed To Payment
            </button>
            <button className="clear-cart-page-btn" onClick={clearCart}>
              Clear All Items
            </button>
          </div>

          <div className="cart-page-items">
            {filterItems.map((item) => (
              <div key={item.id} className="cart-page-item">
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img src={item.img} alt={item.name} className="cart-page-item-img"/>
                </div>
                <div className="cart-page-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.nameItalic}</p>
                  <p>Price: ₹{item.price}</p>
                  <button
                    className="remove-cart-page-btn"
                    onClick={() => addToCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
