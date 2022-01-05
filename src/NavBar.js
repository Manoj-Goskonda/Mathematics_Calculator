import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../src/assets/Images/logo.png";
import profileImg from "../src/assets/Images/user.png";

const NavBar = () => (
  <>
    <div>
      <div className="row">
        <div className="col-12 mx-auto">
          <nav className="navbar fixed-top navbar-expand-lg nav_bg navbar-light ">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">
                <img className="logoImg" src={logoImg} />
              </NavLink>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto my-2 my-lg-0 ">
                  <li className="nav-item itemnav">
                    <NavLink
                      className="main-nav"
                      activeClassName="main-nav-active"
                      aria-current="page"
                      exact
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item itemnav">
                    <NavLink
                      className="main-nav"
                      activeClassName="main-nav-active"
                      exact
                      to="/about"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item itemnav">
                    <NavLink
                      className="main-nav"
                      activeClassName="main-nav-active"
                      exact
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item itemnav">
                    <NavLink
                      className="main-nav"
                      activeClassName="main-nav-active"
                      exact
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="profileView">
                <img className="profileImg" src={profileImg} />
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    John Array
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink to="" className="dropdown-item">
                        Action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" className="dropdown-item">
                        Another action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" className="dropdown-item">
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </>
);
export default NavBar;
