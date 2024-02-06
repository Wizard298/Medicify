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
            <Link className='login-link-heading hovering' to="/login"><h2 className="login-heading">Login</h2></Link> 
            <Link className='signup-link-heading' to="/signup"><h2 className="signup-heading">Sign Up</h2></Link> 
            {/* <h2 className="signup-heading"><Link to="/signup">SignUp</Link> </h2> */}
          </div>
          

          <div className="lo-si-component">
            <p className="para-signin"> Login or SignUp to access your orders,special offers, health tips
              and more! </p>
            <div className="phnum">

              {/* <label className="phnum-label" htmlFor="email">E-Mail</label> */}
              {/* <br /> */}
              <input type="email" className="num-edit" name="email"  id="number" placeholder="Email id"/>
              <br />
              {/* <label className="phnum-label" htmlFor="number">Password</label> */}
              <br />
              <input type="password" className="num-edit" name="number"  id="number" placeholder="Password"/>

            </div>
              <br />
            <button className="otp">Login</button>
            <br />
            <br />
            <div>
              <Link className="anchor-google" to="https://www.google.com"><button className="google">Google</button></Link>
              <Link className="anchor-facebook" to="https://www.facebook.com"><button className="facebook">Facebook</button></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
