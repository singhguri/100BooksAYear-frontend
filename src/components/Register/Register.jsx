import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RegisterService } from "../../services/RegisterService";
import "./Register.css";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    first_name: "",
    last_name: "",
    Email: "",
    Password: "",
    confirmPassword: "",
  });

  const history = useHistory();

  const SignUp = () => {
    if (
      registerUser.first_name &&
      registerUser.last_name &&
      registerUser.Email &&
      registerUser.Password &&
      registerUser.confirmPassword &&
      registerUser.confirmPassword === registerUser.Password
    ) {
      // api hit register and save user
      RegisterService(
        registerUser.first_name,
        registerUser.last_name,
        registerUser.Email,
        registerUser.Password
      ).then((res) => {
        if (res?.respStatus) {
          history.replace("/");
          document.querySelector("#email").value = registerUser.Email;
        }
      });
    }
  };

  return (
    <>
      <div className="main-w3layouts wrapper">
        <h1>SignUp Here</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="" method="post">
              <input
                className="text"
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={(event) => {
                  setRegisterUser({
                    ...registerUser,
                    first_name: event.target.value,
                  });
                }}
                required
              />
              <input
                className="text"
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={(event) => {
                  setRegisterUser({
                    ...registerUser,
                    last_name: event.target.value,
                  });
                }}
                required
              />
              <input
                className="text email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(event) => {
                  setRegisterUser({
                    ...registerUser,
                    Email: event.target.value,
                  });
                }}
                required
              />
              <input
                className="text"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => {
                  setRegisterUser({
                    ...registerUser,
                    Password: event.target.value,
                  });
                }}
                required
              />
              <input
                className="text w3lpass"
                type="password"
                name="password"
                placeholder="Confirm Password"
                onChange={(event) => {
                  setRegisterUser({
                    ...registerUser,
                    confirmPassword: event.target.value,
                  });
                }}
                required
              />
              <div className="wthree-text">
                <div className="clear"> </div>
              </div>
              <input
                className="customButton"
                type="button"
                onClick={SignUp}
                defaultValue="SIGN UP"
              />
            </form>
            {/* <p>
              Don't have an Account? <a href="/register"> Register Now!</a>
            </p> */}
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

export default Register;
