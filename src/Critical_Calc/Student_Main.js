import React, { useState } from "react";
import Student_GetSolution from "./Student_GetSolution";
import Solution from "./Solution";
import NavBar from "../NavBar";
import MainNavBar from "../MainNavBar";
import Std_Normal from "../Standard_Normal/Std_Normal";
import Chi_Square from "../Chi_square/Chi_Square";
import Fisher_Snedecor from "../Fisher_Snedecor/Fisher_Snedecor";
import P_Corr from "../P_Corr/P_Corr";
import Theory from "./Theory";
import Student from "./Student";

const Student_Main = () => {
  return (
    <>
      <br></br>
      <br></br>
      <div className="container fluid">
        <div className="row ">
          <div className="col-lg-12 col-12 multitabs">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item tab">
                <a
                  className="nav-link active"
                  id="getsolution"
                  data-toggle="tab"
                  href="#tabs-6"
                  role="tab"
                >
                  Student’s t
                </a>
              </li>
              <li className="nav-item tab">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-7"
                  role="tab"
                >
                  Z (Standard Normal)
                </a>
              </li>
              <li className="nav-item tab">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-8"
                  role="tab"
                >
                  χ2 (chi-Square)
                </a>
              </li>
              <li className="nav-item tab">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-9"
                  role="tab"
                >
                  F (Fisher-Snedecor)
                </a>
              </li>
              {/* <li className="nav-item tab">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-10"
                  role="tab"
                >
                  ρ (corr)
                </a>
              </li> */}
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tabs-6"
                role="tabpanel"
              >
                <Student />
              </div>
              <div className="tab-pane" id="tabs-7" role="tabpanel">
                <Std_Normal />
              </div>
              <div className="tab-pane" id="tabs-8" role="tabpanel">
                <Chi_Square />
              </div>
              <div className="tab-pane" id="tabs-9" role="tabpanel">
                <Fisher_Snedecor />
              </div>
              {/* <div className="tab-pane" id="tabs-10" role="tabpanel">
                <P_Corr />
              </div> */}
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_Main;
