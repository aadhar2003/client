import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const host = "http://localhost:3001";

    let navigate = useNavigate();

  const [side, setSide] = useState("left");
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    name: "",
  });

  const signInClick = () => {
    setSide("left");
  };
  const signUpClick = () => {
    setSide("right");
  };

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };



  const handleSignIn = async(e) => {
    e.preventDefault();
    console.log("Sign IN");


    const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email : credentials.email, password: credentials.password }),
      });

      const json = await response.json();

      if(json.hasOwnProperty("error") || json.hasOwnProperty("errors")){
        
        let errormessage;
        if(json.error !== undefined)
        {
            errormessage = json.error;
        }
        else if(json.errors[0].msg)
        {
            errormessage = json.errors[0].msg;
        }
        else
        {
            errormessage = json.errors;
        }
        console.log(json);
        alert("Error: " + errormessage);
     }
     else{
         // save the auth token and redirect
         localStorage.setItem("token", json.authtoken);
         navigate('/');
     }


  };

  const handleSignUp = async(e) => {
    e.preventDefault();
    console.log("SIgn up");

    const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: credentials.name, email : credentials.email, password: credentials.password }),
      });

      const json = await response.json();

      if(json.hasOwnProperty("error") || json.hasOwnProperty("errors")){
        
        let errormessage;
        if(json.error !== undefined)
        {
            errormessage = json.error;
        }
        else
        {
            errormessage = json.errors[0].msg;
        }
        // console.log(json);
        alert("Error: " + errormessage);
     }
     else{
         // save the auth token and redirect
         localStorage.setItem("token", json.authtoken);
         navigate('/');
     }
  };

  return (
    <>
    <div className="lgcss">
      <div className="outer-con">
        <div
          className={`container ${
            side === "left" ? "left-panel-active" : "right-panel-active"
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignUp}>
              <h1>Create Account</h1>

              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email" // c email for create accout email while signing up
                value={credentials.email}
                onChange={handleChange}
              />
              <input type="password" placeholder="Password" 
               id="password"
               name="password" // c email for create accout email while signing up
               value={credentials.password}
               onChange={handleChange} />
              <button >Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleSignIn}>
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
              <button type="submit">Sign In</button>
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
      </div>
    </>
  );
};

export default Login;
