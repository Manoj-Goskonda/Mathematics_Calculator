import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Hypothesis_Nav = () => {

  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 mx-auto"  style={{ marginBottom: "25px" }}>
            <nav className="navbar2 fixed-top navbar-expand-lg nav_bg1 navbar-light ">
              <div className="container-fluid">
                <div className="col-12 mx-auto">
                  <div className="navigation2" >
                    <div className="container" >
                      <ul className="nav" role="tablist" >
                        <li className="nav-item2 nav-items2" >
                          <NavLink
                            className="nav-link"
                            data-toggle="tab"
                            href=""
                            role="tab"
                            to="hypothesis"
                          >
                            One Sample
                          </NavLink>
                        </li>
                        <li className="nav-item2 nav-items2">
                          <NavLink
                            className="nav-link"
                            data-toggle="tab"
                            href="#tabs-2"
                            role="tab"
                            to="twosampleequal"
                          >
                            Two Sample (equal variance)
                          </NavLink>
                        </li>
                        <li className="nav-item2 nav-items2">
                          <NavLink
                            className="nav-link"
                            data-toggle="tab"
                            href="#tabs-3"
                            role="tab"
                            to="pairedttest"
                          >
                            Paired T-Test
                          </NavLink>
                        </li>
                        <li className="nav-item2 nav-items2">
                          <NavLink
                            className="nav-link active"
                            data-toggle="tab"
                            href="#tabs-1"
                            role="tab"
                            to="twosampleunequal"
                          >
                            Two Sample (Unequal variance)
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                      {/* <Critical /> */}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hypothesis_Nav;
