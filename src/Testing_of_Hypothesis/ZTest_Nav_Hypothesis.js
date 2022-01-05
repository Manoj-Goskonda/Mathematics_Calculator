import React from "react";
import { NavLink } from "react-router-dom";

const ZTest_Nav_Hypothesis = () => {
    
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar3 fixed-top navbar-expand-lg nav_bg1 navbar-light ">
              <div className="container-fluid">
              </div>
            </nav>
          </div>
          <div className="col-12 mx-auto">
            <div className="navigation3">
              <div className="container">
                <ul class="nav" role="tablist">
                  <li class="nav-item2 nav-items2">
                    <NavLink
                      class="nav-link active"
                      data-toggle="tab"
                      href=""
                      role="tab"
                      to="onesampleztest"
                    >
                     One Sample
                    </NavLink>
                  </li>
                  <li class="nav-item2 nav-items2">
                    <NavLink
                      class="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      to="twosampleztest"
                    >
                      Two Sample 
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ZTest_Nav_Hypothesis;
