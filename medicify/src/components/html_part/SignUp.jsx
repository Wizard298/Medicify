import React from 'react'
import '../css_part/Login.css'
import img from '../images/Signimg.png'
import { Link } from "react-router-dom";

function SignUp() {
  return (
<>
    
    <div className="page">
      <div className="img-page">
        <h4 className="medicify-heading">Medicify</h4>
        <img className="login-img" src={img} alt="Error" />
      </div>

      <div className="signup-page">
        <div className="sign-login-toogle">
          <Link className='login-link-heading' to="/login"><h2 className="login-heading">Login</h2></Link> 
          <Link className='signup-link-heading hovering' to="/signup"><h2 className="signup-heading">Sign Up</h2></Link> 
        </div>
        

        <div className="lo-si-component">
          <p className="para-signin"> Login or Sign in to access your orders,special offers, health tips
            and more! </p>
            
          <div className="phnum">
            
            {/* <label className="phnum-label" htmlFor="names1">First Name</label> */}
            <input type="name" className="num-edit" name="firstname"  id="names1" placeholder="First Name"/>
            <br />
            <br />
            {/* <label className="phnum-label" htmlFor="names2">Last Name</label> */}
            <input type="name" className="num-edit" name="lastname"  id="names2" placeholder="Last Name"/>
            <br />

            {/* <label className="phnum-label" htmlFor="email">E-MAIL</label> */}
            <br />
            <input type="email" className="num-edit" name="email"  id="email" placeholder="Email"/>

            <br />
            {/* <label className="phnum-label" htmlFor="password">Password</label> */}
            <br />
            <input type="password" className="num-edit" name="password"  id="password" placeholder="Password"/>
            <br />
          </div>

            {/* <br /> */}
          <button className="otp">Sign Up</button>
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
  )
}

export default SignUp
