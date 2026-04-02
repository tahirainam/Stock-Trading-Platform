import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img 
            src="media/images/logo.svg" 
            alt="Zerotha Logo"
            style={{ width: "140px" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#zerothaNavbar"
          aria-controls="zerothaNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="zerothaNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {/* Menu Icon */}
            <li className="nav-item ms-3 d-flex align-items-center">
              <a href="#" className="nav-link">
                <i className="fa fa-bars"></i>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
