import React, { useState } from "react";
import "../../css_part/Login.css";
import img from "../../images/Signimg.png";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp =() =>{
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
      firstname, lastname, email, password})
      .then((result) => {
        console.log(result)
        alert('Sign Up Successfully!')
        navigate('/login')
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="page">
        <div className="img-page">
          <h4 className="medicify-heading">Medicify</h4>
          <img className="login-img" src={img} alt="Error" />
        </div>

        <div className="signup-page">
          <div className="sign-login-toogle">
            <Link className="login-link-heading" to="/login">
              <h2 className="login-heading">Login</h2>
            </Link>
            <Link className="signup-link-heading hovering" to="/">
              <h2 className="signup-heading">Sign Up</h2>
            </Link>
          </div>

          <div className="lo-si-component">
            <p className="para-signin">
              Login or Sign in to access your orders,special offers, health tips
              and more!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="phnum">
                <input
                  type="name"
                  className="num-edit"
                  name="firstname"
                  id="names1"
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
                <br />
                <br />
                <input
                  type="name"
                  className="num-edit"
                  name="lastname"
                  id="names2"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
                <br />

                <br />
                <input
                  type="email"
                  className="num-edit"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <br />
                <br />
                <input
                  type="password"
                  className="num-edit"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
              </div>

              <button type="submit" className="otp">Sign Up</button>
              {/* <input type="submit" className="otp" /> */}
            </form>
            <br />
            <br />
            <div>
              <button className="google">
                <Link className="anchor-google" to="https://www.google.com">
                  Google
                </Link>
              </button>
              <button className="facebook">
                <Link className="anchor-facebook" to="https://www.facebook.com">
                  Facebook
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
