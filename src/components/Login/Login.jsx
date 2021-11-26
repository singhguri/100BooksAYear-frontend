import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
// import { Button } from "bootstrap";

const Login = () => {
  const history = useHistory();

  const RegisterNow = () => {
    history.replace("/register");
  };

  const SignIn = () => {
    // hit login api and save token
    history.replace('/home');
  }

  return (
    <>
      <div className="main-w3layouts wrapper">
        <h1>Login</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="#" method="post">
              <input
                className="text email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="text"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <div className="wthree-text">
                <div className="clear"> </div>
              </div>
              <input className="customButton" onClick={SignIn} type="button" defaultValue="SIGN IN" />
            </form>
            <p>
              Don't have an Account?{" "}
              <span onClick={RegisterNow} style={{cursor: "pointer"}}>
                {" "}
                Register Now!
              </span>
            </p>
          </div>
        </div>
        <ul className="colorlib-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </>
  );
};

export default Login;
