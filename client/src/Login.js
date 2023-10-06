// import React from "react";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'; // Import the external CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim() || !password.trim()) {
      alert("Please Enter both email and password.");
      return;
    }
    
    axios    
      .post("http://127.0.0.1:3001/login", { email, password })    
      .then((result) => {
        console.log(result);
        if (result.data === "success" && result.status === 200) 
        {
          alert("Login Succesful");
          navigate('/home');
        } else {
          alert("Login Failed Check your Creaditials");
          

          
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="form-label">
            ::Email::
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="form-label">
            ::Password::
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="form-button">
            Login Here
          </button>
        </form>
        <p className="form-text">Don't have an account?</p>
        <Link to="/register" className="link-button">
          Sign Up Here
        </Link>
      </div>
    </div>
  );
}

export default Login;

