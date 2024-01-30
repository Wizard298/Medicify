import React from "react";
import '../css_part/Login.css'
import img from '../images/Signimg.png'

function Login() {
  return (
    <>
    
      <div className="page">
        <div className="img-page">
          <h4 className="medicify-heading">Medicify</h4>
          <img className="login-img" src={img} alt="Error" />
        </div>
        <div className="signup-page">
          <h2 className="signin-heading">Sign In / Sign Up</h2>
          <p className="para-signin"> Sign up or Sign in to access your orders,special offers, health tips
            and more! </p>
          <div className="phnum">
            <label className="phnum-label" htmlFor="number">PHONE NUMBER</label>
            <br />
            <span className="digit">+91</span>{" "}
            <input type="text" className="num" name="number"  id="number" placeholder="Enter your Mobile No."/>
          </div>
          
          <button className="otp">USE OTP</button>
          <br />
          <button className="google"><a className="anchor-google" href="https://www.google.com">Google</a></button>
          <button className="facebook"><a className="anchor-facebook" href="https://www.facebook.com">Facebook</a></button>
        </div>
      </div>

    </>
  );
}

export default Login;
