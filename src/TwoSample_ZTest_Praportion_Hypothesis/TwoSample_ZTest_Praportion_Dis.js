import React from "react";
import ZTest_Praportion_Nav_Hypothesis from "../Testing_of_Hypothesis/ZTest_Praportion_Nav_Hypothesis";

const TwoSample_ZTest_Praportion_Dis = () => {
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
                    <a href="#"></a>Two Sample Praportion
                  </li>
                </ol>
              </nav>
              <div className="critical_help">
                <h1 className="m-3">Proportion Calculator - Z test </h1>
                <a className="critical_a" href="">
                  Help
                </a>
              </div>
              <p className="m-3">
                The z-test is any statistical hypothesis test in which the test
                statistic follows a normal distribution under the null
                hypothesis. A z-test is the most commonly applied for mean
                comparison but also we can use it to test the proportion.
              </p>
              <ZTest_Praportion_Nav_Hypothesis />
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <h1 className="hypothesis">Two Sample Proportion Z-test</h1>
    </>
  );
};

export default TwoSample_ZTest_Praportion_Dis;
