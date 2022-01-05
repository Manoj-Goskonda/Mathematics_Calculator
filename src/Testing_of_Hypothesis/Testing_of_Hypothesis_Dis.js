import React from "react";
import Hypothesis_Nav from './Hypothesis_Nav';

const Testing_of_Hypothesis_Dis = () => {
  
    return (
    <>
      {/* <Distribution /> */}
      <div className="heading footer_bg1">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item ">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item home_breadcumb">
                    <a href="#"></a>Testing Of Hypothesis
                  </li>
                  <li class="breadcrumb-item home_breadcumb">
                    <a href="#"></a>One Sample
                  </li>
                </ol>
              </nav>
              <div className="critical_help">
                <h1 className="m-3">T - test Calculator</h1>
                <a className="critical_a" href="">
                  Help
                </a>
              </div>
              <p className="m-3">
                The t-test is any statistical hypothesis test in which the test statistic follows
                a Student's t-distribution under the null hypothesis. A t-test is the most
                commonly applied when the test statistic would follow a normal distribution
                & when standard deviation is unknown if the value of a scaling term in the
                test statistic were known.
              </p>
              < Hypothesis_Nav />
              <br></br>
              
            </div>
          </div>
        </div>
      </div>
      <h1 className="hypothesis" style={{ fontWeight: "bold" }}>One Sample t-test (σ Unknown) </h1>
    </>
  );
};

export default Testing_of_Hypothesis_Dis;
