import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "./assets/Images/facebook.png";
import instagram from "./assets/Images/insta.png";
import google from "./assets/Images/goole.png";
import linkedin from "./assets/Images/link.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="subscribehereView">
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="solutionText">
                        999 Solutions are remaining, If u want more click here
                        on
                      </p>
                      <NavLink
                        style={{ fontSize: 22, textDecoration: "none" }}
                        to=""
                      >
                        Subscribe
                      </NavLink>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="solutionText">
                        Ask questions to our Expert
                      </p>
                      <NavLink
                        style={{ fontSize: 22, textDecoration: "none" }}
                        to=""
                      >
                        Subscribe
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid footersecond">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h4 className="footerbatch">Company</h4>
                  <ul className="footerList">
                    <li>
                      <NavLink className="footerLink" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="footerLink" to="/about">
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="footerLink" to="/contact">
                        Contact us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="footerLink" to="/service">
                        Services
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <h4 className="footerbatch">Our Terms</h4>
                  <ul className="footerList">
                    <li>
                      <NavLink className="footerLink" to="">
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="footerLink" to="">
                        Discaimer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="footerLink" to="">
                        Terms & Conditions
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div>
                    <h4 className="footerbatch">Follow Us</h4>
                    <ul className="footerList1">
                      <li>
                        <NavLink className="footerLink" to="https://www.facebook.com">
                            <img
                            style={{ width: 40, height: 40 }}
                            src={facebook}       
                          />                     
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="footerLink" to="https://www.gmail.com/">
                          <img
                            style={{ width: 40, height: 40 }}
                            src={google}
                          />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="footerLink" to="https://www.instagram.com/">
                          <img
                            style={{ width: 50, height: 50 }}
                            src={instagram}
                          />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="footerLink" to="https://www.linkedin.com/">
                          <img
                            style={{ width: 50, height: 50 }}
                            src={linkedin}
                          />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="footerbatch">Support</h4>
                    <ul className="footerList">
                      <li>
                        <NavLink className="footerLink" to="mailto:support@ais.com?">
                        <a href="mailto:support@ais.com?" target="_blank" style={{color:'white', textDecoration: 'none'}}>
                          support@ais.com
                          </a>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
