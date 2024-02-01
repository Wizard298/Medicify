import React from "react";
import "../css_part/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="columns">
          <div className="company">
            <div className="heading"><h4>COMPANY</h4>  </div>
            <div className="text"><Link to="/">About Medicify</Link> </div>
            <div className="text"><Link to="/">Customer</Link> </div>
            <div className="text"><Link to="/">News</Link> </div>
            <div className="text"><Link to="/">Career</Link> </div>
            <div className="text"><Link to="/">Contact</Link> </div>
          </div>
          <div className="company">
            <div className="heading"><h4 className="fourth-heading">OUR POLICIES</h4> </div>
            <div className="text"><Link to="/">Terms and Conditions</Link> </div>
            <div className="text"><Link to="/">Privacy Policy</Link> </div>
            <div className="text"><Link to="/">Payments Policy</Link> </div>
            <div className="text"><Link to="/">Shipping Policy</Link> </div>
            <div className="text"><Link to="/">Return,Refund,etc</Link> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4>SHOPPING</h4> </div>
            <div className="text"><Link to="/">Home</Link> </div>
            <div className="text"><Link to="/cart">Cart</Link> </div>
            <div className="text"><Link to="/health">Health</Link> </div>
            <div className="text"><Link to="/">Offers/Coupons</Link> </div>
            <div className="text"><Link to="/">FAQs</Link> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4>SOCIAL</h4> </div>
            <div className="text"><Link to="https://www.facebook.com">Facebook</Link> </div>
            <div className="text"><Link to="https://www.twitter.com">Twitter</Link> </div>
            <div className="text"><Link to="https://www.linkedin.com">Linkedln</Link> </div>
            <div className="text"><Link to="https://www.youtube.com">Youtube</Link> </div>
            <div className="text"><Link to="https://www.google.com">Google</Link> </div>
            <div className="text"><Link to="https://www.instagram.com">Instagram</Link> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4><Link to="/">SUBSCRIBE TO OUR NEWSLETTER</Link></h4> </div>
            <p>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</p>
          </div>
        </div>
        <div className="copyright">
          Copyright© 2024. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
