import React from "react";
import './Navbar.css';

const Navbar = () => {
    const locationArr = [
        '/home'
    ];


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ display: window.location.href.match(locationArr) ? "block" : "none" }}>
                <div className="container-fluid">
                    <a className="navbar-brand brand_name" href="/#">100 BOOKS A YEAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link" type="submit" style={{ color: "yellow" }}>Login</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link" type="submit" style={{ color: "pink" }}>Register</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" style={{ borderRadius: "20px", border: "none", padding: "0px 25px" }} />
                            <button className="btn btn-sm btn-outline-light" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;