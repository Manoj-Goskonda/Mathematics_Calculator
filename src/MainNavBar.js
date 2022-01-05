import React from "react";
import { NavLink } from "react-router-dom";

const MainNavBar = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar fixed-top navbar-expand-lg nav_bg1 navbar-light ">
              <div className="container-fluid">
                <h1 className="mainnav_heading">Statistics</h1>
              </div>
            </nav>
          </div>
          <div className="col-12 mx-auto">
            <div className="navigation">
              <div className="container">
                <ul class="nav" role="tablist">
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link active"
                      data-toggle="tab"
                      href=""
                      role="tab"
                      to="myfavourite"
                    >
                      My Favourite
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      to="discriprive"
                    >
                      Discriprive Statistics
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      to="hypothesis"
                    >
                      Testing Of Hypothesis
                    </NavLink>
                  </li>
                </ul>
                <ul class="nav" role="tablist">
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      to="critical"
                    >
                      Critical Value / P Value
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href=""
                      role="tab"
                      to="plotsgraps"
                    >
                      Plots/Graps
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      to="probability"
                    >
                      Probability
                    </NavLink>
                  </li>
                </ul>
                <ul class="nav" role="tablist">
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link active"
                      data-toggle="tab"
                      href=""
                      role="tab"
                      to="confidence"
                    >
                      Confidence Intervals
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      to="correlation"
                    >
                      Correlation
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      to="regression"
                    >
                      Regression
                    </NavLink>
                  </li>
                </ul>
                <ul class="nav" role="tablist">
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link active"
                      data-toggle="tab"
                      href=""
                      role="tab"
                      to="samplesize"
                    >
                      Sample Size/Effect
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      to="distributions"
                    >
                      Distributions
                    </NavLink>
                  </li>
                  <li class="nav-item nav-items">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      to="seemore"
                    >
                      See More...
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                {/* <Critical /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavBar;
