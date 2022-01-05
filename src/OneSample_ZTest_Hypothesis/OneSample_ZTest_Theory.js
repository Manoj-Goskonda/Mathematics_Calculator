import React from "react";
import Onesampleztest2 from "../assets/Images/Onesampleztest2.png";
import Onesampleztest3 from "../assets/Images/Onesampleztest3.png";

const Onesample_Ztest_Theory = () => {
  return (
    <>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="container">
                    <h3 className="get1-text">Introduction:</h3>
                    <p>
                      Suppose there are two populations under study and we need
                      to compare the population means of these populations then
                      we use a two-sample mean test. There are some assumptions
                      that should be satisfied to carry out hypothesis testing.
                      <br />
                      <h5 className="get1-text">
                        Assumptions for two sample mean test
                      </h5>
                      <div className="ml-5 mt-3 mb-2 pb-5">
                        <p>1.The data should be continuous.</p>
                        <p>
                          
                          2. The observations in the data should be independent.
                        </p>
                        <p>3. The two samples are independent of each other.</p>
                        <p>
                          
                          4. Both the samples should come from the normal
                          distribution.
                        </p>
                      </div>
                    </p>
                    <p>
                      If the data follows these conditions then one can go to
                      compare two population means. You should check if the
                      population standard deviations are known before going to
                      test the claim. If you know, both the population standard
                      deviations in advance then use the two-sample Z test.
                      Moreover, if you do not know either of the two population
                      standard deviations then use a two-sample t-test.
                    </p>
                    <br></br>

                    <h3 className="get1-text">Steps:</h3>

                    <p>
                      Let us see what are the steps that you need to follow in
                      the two-sample mean test one by one.
                    </p>
                    <br></br>
                    <div className="col-lg-12 col-12">
                      <div className="row ">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required1">Step 1:</h5>
                          <h5 className="get1-text ml-lg-2">
                            Fix the null and alternative hypotheses.
                          </h5>
                        </div>
                        <p>
                          The null and alternative hypotheses for proportion
                          testing are as follows.
                        </p>
                        <div>
                          <img
                            className="theory-graph-img"
                            src={Onesampleztest2}
                          />
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className="col-lg-12 col-12">
                      <div className="row ">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required1">Step 2:</h5>
                          <h5 className="get1-text ml-lg-2">
                            Chose the correct formula to calculate the test
                            statistic.
                          </h5>
                        </div>
                        <p>
                          Use the following formula to find the test statistic
                          for the one-sample Z proportion test.
                        </p>
                        <div>
                          <img
                            className="theory-graph-img"
                            src={Onesampleztest3}
                          />
                        </div>
                        <p>
                          Here p-hat is the sample proportion; p0 is the
                          proportion, at which you need to test the claim, n is
                          the sample size.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row ">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required1">Step 3:</h5>
                          <h5 className="get1-text ml-lg-2">
                            Fix the significance level (α).
                          </h5>
                        </div>
                        <p>
                          Most of the time the value of α is given in the
                          question. If you do not know the value of α then just
                          take α=0.05.
                        </p>
                        <br></br>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row ">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required1">Step 4:</h5>
                          <h5 className="get1-text ml-lg-2">
                            Find the critical value/s or p-value.
                          </h5>
                        </div>
                        <p>
                          The critical values or p-value are essential in making
                          the decision, whether to reject or fail to reject the
                          null hypothesis. You can use either the statistical
                          tables or technology like excel or TI84 calculator or
                          R-Studio, etc. to find critical values as well as
                          p-value.
                        </p>
                        <br></br>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row ">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required1">Step 5:</h5>
                          <h5 className="get1-text ml-lg-2">
                            
                            Make the decisions based on critical value/ p-value.
                          </h5>
                        </div>
                        <p className="sol-text">Based on critical values:</p>
                        <br></br>
                        <p>
                          Using critical values, you can decide the rejection
                          region. If the value of test statistic found in step 2
                          lies in the rejection region then reject the null
                          hypothesis at α level of significance, otherwise, fail
                          to reject the null hypothesis.
                        </p>
                        <p className="sol-text">Based on p-value :</p>
                        <br></br>
                        <p>
                          If the p-value ≤ α then reject the null hypothesis
                          otherwise fail to reject the null hypothesis.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row ">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required1">Step 6:</h5>
                          <h5 className="get1-text ml-lg-2">
                            Conclusion based on the decision.
                          </h5>
                        </div>
                        <p>
                          If you reject the null hypothesis then write the
                          conclusion is as follows.
                        </p>
                        {/* <p>There is sufficient evidence to support the claim the population means are unequal (OR µ1 < µ2 OR µ1 > µ2).</p> */}
                        <p>
                          
                          If you fail to reject the null hypothesis then write
                          the conclusion is as follows.
                        </p>
                        {/* <p>There is insufficient evidence to support the claim the population means are unequal (OR µ1 < µ2 OR µ1 > µ2).</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="sol-text element" style={{ marginLeft: "auto" }}>
            One Sample Z test
          </p>
        </div>
        <p className="last-heading">
          If you like the page, please share or like. Questions, comments and
          suggestions are appreciated.
        </p>
      </div>
    </>
  );
};

export default Onesample_Ztest_Theory;
