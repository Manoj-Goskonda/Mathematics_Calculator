import React from "react";
import Twosampleunequal4 from "../assets/Images/Twosampleunequal4.png";
import Twosampleunequal5 from "../assets/Images/Twosampleunequal5.png";

const TwoSample_Unequal_Theory = () => {
  return (
    <>
      <p className="get-text">Theory :</p>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="container">
                    <br />
                    <br />
                    <h3 className="get-text">Introduction:</h3>
                    <p>
                      Suppose there are two populations under study and we need
                      to compare the population means of these populations then
                      we use a two-sample mean test. There are some assumptions
                      that should be satisfied to carry out hypothesis testing.
                      <br />
                    </p>
                    <br />
                    <h3 className="get-text">
                      Assumptions for two sample mean test:
                    </h3>

                    <div className="x2theory">
                      <p className="p_tscore">
                        1.The data should be continuous.
                        <br />
                      </p>

                      <p className="p_tscore">
                        2. The observations in the data should be independent.
                      </p>
                      <p className="p_tscore">
                        3. The two samples are independent of each other.
                        <br />
                      </p>
                      <p className="p_tscore">
                        4. Both the samples should come from the normal
                        distribution.
                        <br />
                      </p>
                    </div>
                    <p>
                      If the data follows these conditions then one can go to
                      compare two population means. You should check if the
                      population standard deviations are known before going to
                      test the claim. If you know, both the population standard
                      deviations in advance then use the two-sample Z test.
                      Moreover, if you do not know either of the two population
                      standard deviations then use a two-sample t-test.
                    </p>
                    <br />
                    <h3 className="get-text">Steps:</h3>
                    <p>
                      Let us see what are the steps that you need to follow in
                      the two-sample mean test one by one.
                    </p>
                    <div className="col-lg-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h3 className="required1">Step:1</h3>
                          <h5 className="get-text m-lg-2">
                            {" "}
                            Fix the null and alternative hypotheses.
                          </h5>
                        </div>
                        <p>
                          The null and alternative hypotheses for the two-sample
                          mean test are as follows.
                        </p>
                        <div className="x2theory">
                          <p className="p_tscore">
                            {/* H0 : μ VS H1: μ =  μ0 OR μ < μ0 OR μ > μ0  */}
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h3 className="required1">Step:2</h3>
                          <h5 className="get-text m-lg-2">
                            {" "}
                            Chose the correct formula to calculate the test
                            statistic.
                          </h5>
                        </div>
                        <p>
                          In the two-sample t-test, if we assume population
                          standard deviations are unequal then we use the below
                          formula to calculate the test statistic.
                        </p>
                        <div>
                          <img
                            className="theory-graph-img"
                            src={Twosampleunequal4}
                          />
                        </div>
                        <p>
                          Where the test statistic follows a t distribution with
                          (n1+n2-2) are the degrees of freedom under the null
                          hypothesis. Use the following formula to calculate
                          pooled sample standard deviation (s).
                        </p>
                        <div>
                          <img
                            className="theory-graph-img"
                            src={Twosampleunequal4}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h3 className="required1">Step:3</h3>
                          <h5 className="get-text m-lg-2">
                            {" "}
                             Fix the significance level (α).
                          </h5>
                        </div>
                        <p>
                        Most of the time the value of α is given in the question. If you do not know the value of α then just take α=0.05.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h3 className="required1">Step:4</h3>
                          <h5 className="get-text m-lg-2">
                            {" "}
                             Find the critical value/s or p-value.
                          </h5>
                        </div>
                        <p>
                        The critical values or p-value are essential in making the decision, whether to reject or fail
                         to reject the null hypothesis. You can use the statistical tables to find critical values as well as p-value.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h3 className="required1">Step:5</h3>
                          <h5 className="get-text m-lg-2">
                            {" "}
                            Make the decisions based on critical value/ p-value.
                          </h5>
                        </div>
                      </div>
                      <p className="sol-text">Based on critical values:</p>
                      <p>
                      <div className="col-lg-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h3 className="required1">Step:5</h3>
                          <h5 className="get-text m-lg-2">
                            {" "}
                            Make the decisions based on critical value/ p-value.
                          </h5>
                        </div>
                      </div>
                      <p className="sol-text">Based on critical values:</p>
                      <p>
                        Using critical values, you can decide the rejection
                        region. If the value of test statistic found in step 2
                        lies in the rejection region then reject the null
                        hypothesis at α level of significance, otherwise, fail
                        to reject the null hypothesis.
                      </p>
                      <p className="sol-text">Based on p-value:</p>
                      <p>
                        If the p-value ≤ α then reject the null hypothesis
                        otherwise fail to reject the null hypothesis.
                      </p>
                    </div>
                      </p>
                      <p className="sol-text">Based on p-value:</p>
                      <p>
                        If the p-value ≤ α then reject the null hypothesis
                        otherwise fail to reject the null hypothesis.
                      </p>
                    </div>
                   
                    <p className="get-text">
                      Step 5: Make the decisions based on critical value/
                      p-value.
                    </p>
                    <br></br>
                    <p className="sol-text">Based on critical values:</p>
                    <br></br>
                    <p>
                      Using critical values, you can decide the rejection
                      region. If the value of test statistic found in step 2
                      lies in the rejection region then reject the null
                      hypothesis at α level of significance, otherwise, fail to
                      reject the null hypothesis.
                    </p>
                    <br></br>
                    <p className="sol-text">Based on p-value:</p>
                    <br></br>
                    <p>
                      If the p-value ≤ α then reject the null hypothesis
                      otherwise fail to reject the null hypothesis.
                    </p>
                    <br></br>
                    <p className="get-text">
                      Step 6: Conclusion based on the decision.
                    </p>
                    <p>
                      If you reject the null hypothesis then write the
                      conclusion is as follows.
                    </p>
                    <br></br>
                    {/* <p>There is sufficient evidence to support the claim the population means are unequal (OR µ1 < µ2 OR µ1 > µ2).</p><br></br> */}
                    <p>
                      {" "}
                      If you fail to reject the null hypothesis then write the
                      conclusion is as follows.
                    </p>
                    <br></br>
                    <p>
                      There is not sufficient evidence to support the claim the
                      population means are unequal
                      {/* (OR µ1 < µ2 OR µ1 > µ2).</p> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="last-heading">
          If you like the page, please share or like. Questions, comments and
          suggestions are appreciated.
        </p>
      </div>
    </>
  );
};

export default TwoSample_Unequal_Theory;
