import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/auth.scss";
import LoginImg from "../../../../public/Images/Login.webp";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handelLogin, loading } = useAuth();
  
  const navigate = useNavigate()

  function handelLoginForm(e) {
    e.preventDefault();

    handelLogin(username, password).then((res) => {
      console.log(res);
    });

    navigate("/")
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
            <h1>Login To Pixora</h1>
          </div>
          <div className="login-form">
            <form
              onSubmit={(e) => {
                handelLoginForm(e);
              }}
            >
              <input
                type="text"
                placeholder="Enter you username or email"
                value={username}
                required
                onInput={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Enter you password"
                value={password}
                required
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button disabled={loading}>
                {loading ? "Wait..." : "Login"}
              </button>
            </form>
          </div>
          <div className="forget-password">
            <p>Forgetten Password?</p>
          </div>
          <Link className="registerLink" to="/register">
            <span>Create new account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
