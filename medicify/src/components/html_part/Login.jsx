import React from "react";
import img from '../images/Signimg.png'

function Login() {
  return (
    <>
      <div className="container d-flex page">
        <div className="img">
          <h1 className="text-center">Medicify</h1>
          <img src={img} alt="Error" />
        </div>
        <div className="signup">
          <h2>Sign In / Sign Up</h2>
          {/* <h1 className="text-center">Sign In / Sign Up</h1>  */}
          <p className="my-4">
            Sign up or Sign in to access your orders,special offers, health tips
            and more!
          </p>
          <label for="number">PHONE NUMBER</label>
          <br />
          <span>+91</span>{" "}
          <input
            type="text"
            name=""
            id="number"
            placeholder="Enter your Mobile No."
          />
          <br />
          <button className="btn btn-primary butn">USE OTP</button>
          <button className="btn google">Google</button>
          <button className="btn facebook">Facebook</button>
        </div>
      </div>
    </>
  );
}

export default Login;
