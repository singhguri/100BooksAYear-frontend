import React from "react";
import "./Navbar.css";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { locationArr } from "../index.js";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();

  const LogOut = () => {
    localStorage.setItem('token', '');
    history.replace("/");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          display: locationArr.includes(location.pathname) ? "block" : "none",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand brand_name" href="/">
            100 BOOKS A YEAR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to
                  className="nav-link"
                  type="submit"
                  style={{ color: "yellow" }}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/home'
                  className="nav-link"
                  type="submit"
                  style={{ color: "pink" }}
                >
                  Register
                </NavLink>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  padding: "0px 25px",
                }}
              />
              <button className="btn btn-sm btn-outline-light" type="button">
                Search
              </button>
            </form> */}
            <ul>
              <li className="nav-item">
                <p
                  className="nav-link"
                  type="button"
                  onClick={LogOut}
                  style={{ color: "pink", marginBottom: 0, paddingTop: '1rem' }}
                >
                  Log Out
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
