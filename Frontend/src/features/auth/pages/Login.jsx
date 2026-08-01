import "../shared/global.scss";
import LoginImg from "../../../assets/images/Login.webp";
import { Link, Navigate, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate()

  const {handleLogin,laoding} = useAuth()

  async function handelSubmit(e) {
    e.preventDefault();

    handleLogin(username,password).then(res=>{console.log(res)})

    // naviagte("/")
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
            <form onSubmit={(e)=>{
                handelSubmit(e)
            }}>
              <input
                value={username}
                onInput={(e)=>{
                    setUsername(e.target.value)
                }}
                type="text"
                placeholder="Enter you username or email"
                required
              />
              <input 
                value={password}
                onInput={(e)=>{
                    setPassword(e.target.value)
                }}
              type="text" placeholder="Enter you password" required />
              <button disabled={laoding} >
                {laoding? "Wait...": "Login"}
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
