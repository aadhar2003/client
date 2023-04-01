import React, { useState } from "react";
import "../login_page/Login.css";


const Login = () => {
  const [side, setSide] = useState("left");
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    name: "",
    cemail: "",
  });

  const signInClick = () => {
    setSide("left");
  };
  const signUpClick = () => {
    setSide("right");
  };

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="outer-con">
        <div
          className={`container ${
            side === "left" ? "left-panel-active" : "right-panel-active"
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>

              <input
                type="text"
                placeholder="Name"
                id="cname"
                name="cname"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                id="cemail"
                name="cemail" // c email for create accout email while signing up
                value={credentials.cemail}
                onChange={handleChange}
              />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>

              {/* <span>or use your account</span> */}
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email" // c email for create accout email while signing up
                value={credentials.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password" // c email for create accout email while signing up
                value={credentials.password}
                onChange={handleChange}
              />
              {/* <a href="#">Forgot your password?</a> */}
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn" onClick={signInClick}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={signUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
