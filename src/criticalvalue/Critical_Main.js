import React from "react";
import Graph1 from "../assets/Images/graph1.png";
import Graph2 from "../assets/Images/graph2.png";
import Graph3 from "../assets/Images/graph3.png";
import Graph4 from "../assets/Images/graph4.png";
import Graph5 from "../assets/Images/graph5.png";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/Images/logo.png";
import profileImg from "../assets/Images/user.png";
// import { Navbar, Nav } from 'react-bootstrap';
import Search from "@material-ui/icons/Search";
import CriticalValue from "./CriticalValue";
import PValue from "../Critical_P_Value/PValue";
import Student from "../Critical_Calc/Student";
export const Critical_Main = () => {
  return (
    <>
      <div className="heading">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <h1 class="criticalValue_heading">Critical Value</h1>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/student"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph1} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>Student’s t</h5>
                      <p>
                        <svg
                          className="svg_star"
                          width="30"
                          height="30"
                          viewBox="0 0 39 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z"
                            fill="#C4C4C4"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div class="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/standard"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph2} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>Z (Standard Normal)</h5>
                      <p>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 39 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z"
                            fill="#C4C4C4"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div class="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/square"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph3} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>χ2 (chi-Square)</h5>
                      <p>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 39 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z"
                            fill="#C4C4C4"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="row mt-100">
              <div className="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/fisher"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph4} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>F (Fisher-Snedecor)</h5>
                      <p>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 39 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z"
                            fill="#C4C4C4"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              {/* <div class="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/pcorr"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph5} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>ρ </h5>
                      <p>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 39 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z"
                            fill="#C4C4C4"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Critical_Main;
