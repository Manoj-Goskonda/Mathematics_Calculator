import React from "react";

const OneSample_Hypothesis_Theory = () => {
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
                      In this type of hypothesis testing, the population mean (µ) is the parameter of interest.
                      We collect the sampled data from the population and make inferences and conclusions
                      based on this sample. Before going to perform one-sample mean testing you, need to
                      understand the assumptions that should be satisfied to carry out hypothesis testing.
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
                        3. The data should come from the normal distribution.<br />
                      </p>
                    </div>
                    <p>If the data follow these assumptions then one can go to test the claim about population
                      mean (µ). You should check if the population standard deviation (σ)is known before
                      going to test the claim. Use a one-sample Z test if you know the population standard
                      deviation in advance. Moreover, if you do not know the population standard deviation
                      then use a one-sample t-test.</p>
                    <br />
                    <p className="get-text">Steps:</p>
                    <p>
                      Let us see what are the steps involved in the one-sample mean test one by one.
                    </p>
                    <p className="get-text">Steps 1:  Fix the null and alternative hypotheses.</p>
                    <br></br>
                    <p>
                      The null and alternative hypotheses for a Z test are as follows.
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
                    <p>Use the following formula to find the test statistic for the t-test.</p>
                    <div>

                    </div>
                    <br />
                    <p>In one sample T test, the test statistics follow a student’s t-distribution with (n-1)
                      degrees of freedom if the null hypothesis assumed true.</p>
                    <br></br>
                    <p>In the above formulas, X is the sample mean; µ0 is the  Pupulation mean value of mean
                      for which we perform the test; s is the sample standard deviation and n is the sample
                      size.</p>
                    <p className="get-text">Step 3:  Fix the significance level (α).</p>
                    <br></br>
                    <p>Most of the time the value of α is given in the question. If you do not know the value of
                      α then just take α=0.05</p>
                    <p className="get-text">Step 4:  Find the critical value/s or p-value.</p>
                    <br></br>
                    <p>The critical values or p-value are essential in making the decision, whether to reject or
                      fail to reject the null hypothesis. You can use the T tables.</p>
                    <p className="get-text">Step 5:  Make the decisions based on critical value/ p-value.</p>
                    <br></br>
                    <p className="sol-text">Based on critical values:</p><br></br>
                    <p>Using critical values, you can decide the rejection region. If the value of test statistic
                      found in step 2 lies in the rejection region then rejects the null hypothesis at α level of
                      significance, otherwise, fail to reject the null hypothesis.</p><br></br>
                    <p className="sol-text">Based on p-value:</p><br></br>
                    <p>If the p-value ≤ α then reject the null hypothesis otherwise fail to reject the null
                      hypothesis.</p><br></br>
                    <p className="get-text">Step 6:  Conclusion based on the decision.</p>
                    <p>If you reject the null hypothesis then write the conclusion is as follows.</p>
                    <br></br>
                    <p>There is sufficient evidence to support the claim the population mean (µ) is different
                      from µ0 (OR the population mean (µ) is less than µ0 OR the population mean is greater
                      than µ0).</p><br></br>
                    <p>If you fail to reject the null hypothesis then write the conclusion is as follows.</p><br></br>
                    <p>There is not sufficient evidence to support the claim the population mean (µ) is different
                      from µ0 (OR the population mean (µ) is less than µ0 OR the population mean is greater
                      than µ0).</p>
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

export default OneSample_Hypothesis_Theory;
