import React from "react";
import ZTest_Nav_Hypothesis from "../Testing_of_Hypothesis/ZTest_Nav_Hypothesis";

const TwoSample_ZTest_Dis = () => {
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
                    <a href="#"></a>Two Sample
                  </li>
                </ol>
              </nav>
              <div className="critical_help">
                <h1 className="m-3">Z- test Calculator</h1>
                <a className="critical_a" href="">
                  Help
                </a>
              </div>
              <p className="m-3">
                The z-test is any statistical hypothesis test in which the test statistic follows
                a normal distribution under the null hypothesis. A z-test is the most
                commonly applied when the test statistic would follow a normal distribution
                & when standard deviation is known if the value of a scaling term in the
                test statistic were known.
              </p>
              <ZTest_Nav_Hypothesis />
              <br></br>

            </div>
          </div>
        </div>
      </div>
      <h1 className="hypothesis" >Two Sample Z-test (σ Unknown) </h1>
    </>
  );
};

export default TwoSample_ZTest_Dis;
