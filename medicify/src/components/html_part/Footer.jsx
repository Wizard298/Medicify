import React from "react";
import "../css_part/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="columns">
          <div className="company">
            <div className="heading"><h4><Link to="/">COMPANY</Link></h4>  </div>
            <div className="text"><Link to="/">About Medicify</Link> </div>
            <div className="text"><Link to="/">Customer</Link> </div>
            <div className="text"><Link to="/">News</Link> </div>
            <div className="text"><Link to="/">Career</Link> </div>
            <div className="text"><Link to="/">Contact</Link> </div>
          </div>
          <div className="company">
            <div className="heading"><h4> <Link to="/">OUR POLICIES</Link></h4>  </div>
            <div className="text"><Link to="/">Terms and Conditions</Link> </div>
            <div className="text"><Link to="/">Privacy Policy</Link> </div>
            <div className="text"><Link to="/">Payments Policy</Link> </div>
            <div className="text"><Link to="/">Shipping Policy</Link> </div>
            <div className="text"><Link to="/">Return,Refund,etc</Link> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4><Link to="/">SHOPPING</Link></h4> </div>
            <div className="text"><Link to="/">Home</Link> </div>
            <div className="text"><Link to="/">Cart</Link> </div>
            <div className="text"><Link to="/">Health Articles</Link> </div>
            <div className="text"><Link to="/">Offers/Coupons</Link> </div>
            <div className="text"><Link to="/">FAQs</Link> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4><Link to="/">SOCIAL</Link></h4> </div>
            <div className="text"><Link to="/">Facebook</Link> </div>
            <div className="text"><Link to="/">Twitter</Link> </div>
            <div className="text"><Link to="/">Linkedln</Link> </div>
            <div className="text"><Link to="/">Youtube</Link> </div>
            <div className="text"><Link to="/">Instagram</Link> </div>
            <div className="text"><Link to="/">Instagram</Link> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4><Link to="/">SUBSCRIBE TO OUR NEWSLETTER</Link></h4> </div>
            <p>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</p>
          </div>
        </div>
        <div className="copyright">
          Copyright© 2023. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
