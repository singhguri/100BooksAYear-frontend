import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { LoginService } from "../../services/LoginService";
import Loader from "../common/Loader/Loader";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loaded, setLoaded] = useState(false);

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
      setLoaded(true);
      LoginService(user.email, user.password).then((res) => {
        setLoaded(false);
        if (res?.respStatus) {
          localStorage.setItem("token", res.accessToken);
          history.replace("/home");
        }
      });
    }
  };

  return (
    <>
      {loaded ? (
        <Loader />
      ) : (
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
                  autoComplete="false"
                  onChange={setEmail}
                  required
                />
                <input
                  className="text"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="false"
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
      )}
    </>
  );
};

export default Login;
