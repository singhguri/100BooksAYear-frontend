import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { LoginService } from "../../services/LoginService";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const setEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
  };

  const setPassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };

  const history = useHistory();

  const RegisterNow = () => {
    history.replace("/register");
  };

  const SignIn = () => {
    if (user.email && user.password) {
      // hit login api and save token
      LoginService(user.email, user.password).then((res) => {
        if (res?.respStatus) {
          localStorage.setItem("token", res.accessToken);
          history.replace("/home");
        }
      });
    }
  };

  return (
    <>
      <div className="main-w3layouts wrapper">
        <h1>Login</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="#" method="post">
              <input
                className="text email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={setEmail}
                required
              />
              <input
                className="text"
                type="password"
                name="password"
                placeholder="Password"
                onChange={setPassword}
                required
              />
              <div className="wthree-text">
                <div className="clear"> </div>
              </div>
              <input
                className="customButton"
                onClick={SignIn}
                type="button"
                defaultValue="SIGN IN"
              />
            </form>
            <p>
              Don't have an Account?{" "}
              <span onClick={RegisterNow} style={{ cursor: "pointer" }}>
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
