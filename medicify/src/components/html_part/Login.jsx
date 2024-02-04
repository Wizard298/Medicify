import React from "react";
import '../css_part/Login.css'
import img from '../images/Signimg.png'
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
    
      <div className="page">
        <div className="img-page">
          <h4 className="medicify-heading">Medicify</h4>
          <img className="login-img" src={img} alt="Error" />
        </div>

        <div className="signup-page">
          <div className="sign-login-toogle">
            <h2 className="login-heading"><Link to="/login">Login</Link> </h2>
            <h2 className="signup-heading"><Link to="/login">SignUp</Link> </h2>
          </div>
          

          <div className="lo-si-component">
            <p className="para-signin"> Sign up or Sign in to access your orders,special offers, health tips
              and more! </p>
            <div className="phnum">
              <label className="phnum-label" htmlFor="number">E-MAIL</label>
              <br />
              {/* <span className="digit">+91</span>{" "} */}
              <input type="email" className="num" name="number"  id="number" placeholder="Enter your email id"/>
              <br />
              <br />
              <label className="phnum-label" htmlFor="number">Password</label>
              <br />
              <input type="password" className="num" name="number"  id="number" placeholder="Enter your password"/>
            </div>
            <button className="otp">Login</button>
            <br />
            <br />
            <div>
              <button className="google"><Link className="anchor-google" to="https://www.google.com">Google</Link></button>
              <button className="facebook"><Link className="anchor-facebook" to="https://www.facebook.com">Facebook</Link></button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
