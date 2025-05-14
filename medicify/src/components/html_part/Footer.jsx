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
            <div className="text"><Link to="/home">Home</Link> </div>
            <div className="text"><Link to="/home/aboutus">About Us</Link> </div>
            <div className="text"><Link to="/home/services">Services</Link> </div>
            <div className="text"><Link to="/home/contact">Contact Us</Link> </div>
            <div className="text"><Link to="/health">Medicine</Link> </div>
          </div>
          <div className="company">
            <div className="heading"><h4 className="fourth-heading">OUR POLICIES</h4> </div>
            <div className="text"><Link to="/home/terms">Terms & Conditions</Link> </div>
            <div className="text"><Link to="/home/privacy">Privacy Policy</Link> </div>
            <div className="text"><Link to="/home/cartPolicy">Our Cart Policy</Link> </div>
            <div className="text"><Link to="/home/details">More Details...</Link> </div>
            <div className="text"><Link to="/login">Login</Link> </div>
          </div>
          <div className="company">
            <div className="heading"> <h4>SHOPPING</h4> </div>
            <div className="text"><Link to="/health/fitness">Fitness</Link> </div>
            <div className="text"><Link to="/health/covid">Covid</Link> </div>
            <div className="text"><Link to="/health/CardiacCare">Cardiac-Care</Link> </div>
            <div className="text"><Link to="/health/ayurvedic">Ayurvedic</Link> </div>
            <div className="text"><Link to="/cart">Cart</Link> </div>
            {/* <div className="text"><Link to="/">FAQs</Link> </div> */}
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
            <p className="get-a-para">Get a free subscription to our health and fitness tip and stay tuned to our latest offers</p>
          </div>
        </div>
        <div className="copyright">
          Copyright© 2024-2025. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
