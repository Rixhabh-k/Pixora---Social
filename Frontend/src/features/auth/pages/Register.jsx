import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/auth.scss";
import LoginImg from "../../../../public/Images/Login.webp";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {handelRegister,loading} = useAuth()

  const navigate = useNavigate()

  function handelRegisterForm(e) {
    e.preventDefault();

    handelRegister(email,username,password)
    .then((res) => {
      console.log(res);
    });

    navigate("/login")

    
  }

  return (
    <div id="main">
      <div className="left-container">
        <div className="left-wrapper">
          <div className="left-top">
            <h1>
              See everyday moments from <br />
              your <span>close friends.</span>
            </h1>
          </div>
          <div className="left-bottom">
            <img className="loginImage" src={LoginImg} alt="login-image" />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-wrapper">
          <div className="top-text">
            <h1>Create new account</h1>
          </div>
          <div className="login-form">
            <form
              onSubmit={(e) => {
                handelRegisterForm(e);
              }}
            >
              <input
                value={username}
                onInput={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Enter you username"
              />
              <input
                value={email}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Enter you email"
              />
              <input
                value={password}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                placeholder="Create your password"
              />
             <button disabled={loading}>
                {loading ? "Creating..." : "Create new account"}
              </button>
            </form>
          </div>

          <Link className="registerLink" to="/login">
            <span>Already have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
