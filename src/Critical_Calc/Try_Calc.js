import React from "react";
import { NavLink } from "react-router-dom";
import Try_img from "../assets/Images/theory.png";
import logoImg from "../assets/Images/logo.png";
import profileImg from "../assets/Images/user.png";
// import { Navbar, Nav } from "react-bootstrap";
import Search from "@material-ui/icons/Search";
import Critical from "../criticalvalue/Critical";
const Try_Calc = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 mx-auto">
            <h4 className="try">Try this calculators</h4>
            <div className="navigation1">
              <div class="container">
                <div class="row">
                  <div class="col-sm-3">
                    <div className="Theory">
                      <h4>Z test</h4>
                      <img className="Graph1" src={Try_img} />
                      <hr className="image-line"></hr>
                      <div className="theorygraph">
                        <h5>One Sample</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div className="Theory">
                      <h4>Test</h4>
                      <img className="Graph1" src={Try_img} />
                      <hr className="image-line"></hr>
                      <div className="theorygraph">
                        <h5>Cohen’s d</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div className="Theory">
                      <h4>ANOVA</h4>
                      <img className="Graph1" src={Try_img} />
                      <hr className="image-line"></hr>
                      <div className="theorygraph">
                        <h5>One Way ANOVA</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div className="Theory">
                      <h4>Error</h4>
                      <img className="Graph1" src={Try_img} />
                      <hr className="image-line"></hr>
                      <div className="theorygraph">
                        <h5>Type I Error</h5>
                      </div>
                    </div>
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

export default Try_Calc;
