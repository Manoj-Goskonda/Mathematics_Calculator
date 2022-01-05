import React from "react";
import Graph6 from "../assets/Images/graph6.png";
import Graph4 from "../assets/Images/graph4.png";
import Graph5 from "../assets/Images/graph5.png";
import { NavLink } from "react-router-dom";
export const PValue = () => {
  return (
    <>
      <div className="heading">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="criticalValue_heading">P Value</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/tscore"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph4} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>T Score</h5>
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
              <div className="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/zscore"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph5} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>Z Score</h5>
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
              <div className="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/xscore"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph6} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>χ2 Score</h5>
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
              <div className="col-sm-4">
                <NavLink
                  className="main-nav"
                  activeClassName="main-nav-active"
                  aria-current="page"
                  to="/fscore"
                >
                  <div className="graph">
                    <img className="Graph1" src={Graph4} />
                    <hr className="image-line"></hr>
                    <div className="graph-text">
                      <h5>F Score</h5>
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
        </div>
      </div>
    </>
  );
};

export default PValue;
