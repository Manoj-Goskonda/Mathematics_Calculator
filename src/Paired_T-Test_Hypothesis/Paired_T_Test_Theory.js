import React from "react";
import Pairedttest3 from '../assets/Images/Pairedttest3.png';
import Pairedttest4 from '../assets/Images/Pairedttest4.png';
import Pairedttest5 from '../assets/Images/Pairedttest5.png';
import Pairedttest6 from '../assets/Images/Pairedttest6.png';
import Pairedttest7 from '../assets/Images/Pairedttest7.png';

const Paired_T_Test_Theory = () => {

    

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
                    <p className="get-text">Introduction:</p>
                    <p>
                      Suppose there are two populations under study and we need to compare the population
                      means of these populations then we use a two-sample mean test. There are some
                      assumptions that should be satisfied to carry out hypothesis testing.
                      <br />
                    </p>
                    <br />
                    <p className="get-text">Assumptions for one sample mean test :</p>

                    <div className="x2theory">
                      <p className="p_tscore">
                        1.The data should be continuous.
                        <br />
                      </p>

                      <p className="p_tscore">
                        2. The observations in the data should be independent.
                      </p>
                      <p className="p_tscore">
                        3. The two samples are independent of each other.<br />
                      </p>
                      <p className="p_tscore">
                        4. Both the samples should come from the normal distribution.<br />
                      </p>
                    </div>
                    <p>If the data follows these conditions then one can go to compare two population means.
                      You should check if the population standard deviations are known before going to test
                      the claim. If you know, both the population standard deviations in advance then use the
                      two-sample Z test. Moreover, if you do not know either of the two population standard
                      deviations then use a two-sample t-test.</p>
                    <br />
                    <p className="get-text">Steps:</p>
                    <p>
                      Let us see what are the steps that you need to follow in the two-sample mean test one
                      by one.
                    </p>
                    <p className="get-text">Steps 1:  Fix the null and alternative hypotheses.</p>
                    <br></br>
                    <p>
                      The null and alternative hypotheses for the two-sample mean test are as follows.
                      <br></br>
                    </p>
                    <div className="x2theory">
                      <p className="p_tscore">
                        {/* H0 : μ VS H1: μ =  μ0 OR μ < μ0 OR μ > μ0  */}
                        <br />
                      </p>
                    </div>
                    <p className="get-text">Step 2:  Chose the correct formula to calculate the test
                      statistic.</p>
                    <br></br>
                    <p>Use the following formula to find the test statistic for the two-sample Z test.</p>
                    <div>

                      <img className="theory-graph-img" src={Pairedttest3} />

                    </div>
                    <br />
                    <p>In the two-sample Z test, the test statistic follows a standard normal distribution if the null hypothesis assumed true.</p>
                    <br></br>
                    <p> In the two-sample t-test, if we assume population standard deviations are unequal then we use the below formula to calculate the test statistic.</p>
                    <div>
                      <img className="theory-graph-img" src={Pairedttest4} />
                    </div>
                    <p>Where the test statistic follows a t distribution with v is the degrees of freedom under
                      the null hypothesis.</p>
                    <div>
                      <img className="theory-graph-img" src={Pairedttest5} />
                    </div>
                    <p>In the two-sample t-test, if we assume population standard deviations are equal then we
                      calculate pooled sample standard deviation and use the following formula to calculate
                      the test statistic.
                    </p>
                    <div>
                      <img className="theory-graph-img" src={Pairedttest6} />
                    </div>
                    <p>Where the test statistic follows a t distribution with (n1+n2-2) are the degrees of freedom
                      under the null hypothesis. Use the following formula to calculate pooled sample standard
                      deviation (s).</p>
                    <div>
                      <img className="theory-graph-img" src={Pairedttest7} />
                    </div>
                    <p className="get-text">Step 3:  Fix the significance level (α).</p>
                    <br></br>
                    <p>Most of the time the value of α is given in the question. If you do not know the value of α
                      then just take α=0.05.</p>
                    <p className="get-text">Step 4:  Find the critical value/s or p-value.</p>
                    <br></br>
                    <p>The critical values or p-value are essential in making the decision, whether to reject or
                      fail to reject the null hypothesis. You can use either the statistical tables or technology
                      like excel or TI84 calculator or R-Studio, etc. to find critical values as well as p-value.</p>
                    <p className="get-text">Step 5:  Make the decisions based on critical value/ p-value.</p>
                    <br></br>
                    <p className="sol-text">Based on critical values:</p><br></br>
                    <p>Using critical values, you can decide the rejection region. If the value of test statistic
                      found in step 2 lies in the rejection region then reject the null hypothesis at α level of
                      significance, otherwise, fail to reject the null hypothesis.</p><br></br>
                    <p className="sol-text">Based on p-value:</p><br></br>
                    <p>If the p-value ≤ α then reject the null hypothesis otherwise fail to reject the null hypothesis.
                    </p><br></br>
                    <p className="get-text">Step 6:  Conclusion based on the decision.</p>
                    <p>If you reject the null hypothesis then write the conclusion is as follows.</p>
                    <br></br>
                    {/* <p>If you reject the null hypothesis then write the conclusion is as follows. There is sufficient evidence to support the claim the population means are unequal (OR µ1 < µ2 OR µ1 > µ2).</p><br></br> */}
                    <p> If you fail to reject the null hypothesis then write the conclusion is as follows.</p><br></br>
                    {/* <p>There is insufficient evidence to support the claim the population means are unequal */}
                      {/* (OR µ1 < µ2 OR µ1 > µ2).</p> */}
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

export default Paired_T_Test_Theory;
