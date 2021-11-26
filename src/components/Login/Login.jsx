import React from "react";
import './Login.css';

const Login = () => {
  return (
    <>
      <div className="main-w3layouts wrapper">
        <h1>SignUp Here</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="#" method="post">
              <input className="text" type="text" name="Username" placeholder="Username" required />
              <input className="text email" type="email" name="email" placeholder="Email" required />
              <input className="text" type="password" name="password" placeholder="Password" required />
              <input className="text w3lpass" type="password" name="password" placeholder="Confirm Password" required />
              <div className="wthree-text">

                <div className="clear"> </div>
              </div>
              <input type="submit" defaultValue="SIGNUP" />
            </form>
            <p>Don't have an Account? <a href="/#"> Login Now!</a></p>
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
