import React, { useState } from "react";
import "../../css_part/Login.css";
import img from "../../images/Signimg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, {email, password})
      .then((result) => {
        
        if(result.data.message === "Successful"){
          navigate('/home')
          
          localStorage.setItem("user", JSON.stringify(result.data.user));

          alert('Login Successfull!\n Redirecting to home page!')
          window.location.reload(); 

        }
        else{
          alert("Password or email is incorrect!")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="page">
        <div className="img-page">
          <h4 className="medicify-heading">Medicify</h4>
          <img className="login-img" src={img} alt="Error" />
        </div>

        <div className="signup-page">
          <div className="sign-login-toogle">
            <Link className="login-link-heading hovering" to="/login">
              <h2 className="login-heading">Login</h2>
            </Link>
            <Link className="signup-link-heading" to="/">
              <h2 className="signup-heading">Sign Up</h2>
            </Link>
            {/* <h2 className="signup-heading"><Link to="/signup">SignUp</Link> </h2> */}
          </div>

          <div className="lo-si-component">
            <p className="para-signin">
              Login or SignIn to access your orders, special offers, health tips
              and more!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="phnum">
                <input
                  type="email"
                  className="num-edit"
                  name="email"
                  id="number"
                  placeholder="Email id"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <br />
                <input
                  type="password"
                  className="num-edit"
                  name="number"
                  id="number"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <button type="submit" className="otp">
                Login
              </button>
            </form>
            <br />
            <br />
            <div>
              <Link className="anchor-google" to="https://www.google.com">
                <button className="google">Google</button>
              </Link>
              <Link className="anchor-facebook" to="https://www.facebook.com">
                <button className="facebook">Facebook</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
