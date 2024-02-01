import React from "react";
import "../css_part/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="columns">
          <div className="company">
            <div className="heading"><h4><a href="/">COMPANY</a></h4>  </div>
            <div className="text"><a href="/">About Medicify</a> </div>
            <div className="text"><a href="/">Customer</a> </div>
            <div className="text"><a href="/">News</a> </div>
            <div className="text"><a href="/">Career</a> </div>
            <div className="text"><a href="/">Contact</a> </div>
          </div>
          <div className="company">
            <div className="heading"><h4> <a href="/">OUR POLICIES</a></h4>  </div>
            <div className="text"><a href="/">Terms and Conditions</a> </div>
            <div className="text"><a href="/">Privacy Policy</a> </div>
            <div className="text"><a href="/">Payments Policy</a> </div>
            <div className="text"><a href="/">Shipping Policy</a> </div>
            <div className="text"><a href="/">Return,Refund,etc</a> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4><a href="/">SHOPPING</a></h4> </div>
            <div className="text"><a href="/">Home</a> </div>
            <div className="text"><a href="/">Cart</a> </div>
            <div className="text"><a href="/">Health Articles</a> </div>
            <div className="text"><a href="/">Offers/Coupons</a> </div>
            <div className="text"><a href="/">FAQs</a> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4><a href="/">SOCIAL</a></h4> </div>
            <div className="text"><a href="/">Facebook</a> </div>
            <div className="text"><a href="/">Twitter</a> </div>
            <div className="text"><a href="/">Linkedln</a> </div>
            <div className="text"><a href="/">Youtube</a> </div>
            <div className="text"><a href="/">Instagram</a> </div>
            <div className="text"><a href="/">Instagram</a> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4><a href="/">SUBSCRIBE TO OUR NEWSLETTER</a></h4> </div>
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
