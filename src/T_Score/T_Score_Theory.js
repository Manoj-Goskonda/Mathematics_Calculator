import React from "react";

const T_Score_Theory = () => {
  return (
    <>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="container"><br />
                    <h5 className="theory_question">1. Compute your t-score value:</h5>
                    <br />
                    <p className="font-weight-bold">
                      Formulas for the test statistic in t-tests include the
                      sample size, as well as its mean and standard deviation.
                      The exact formula depends on the t-test type - check the
                      sections dedicated to each particular test for more
                      details.
                      <br />
                    </p>
                    <br />
                    <h5 class="theory_question">2. Determine the degrees of freedom for the t-test:</h5>
                    <p className="mt-3 font-weight-bold">
                      The degrees of freedom are the number of observations in a
                      sample that are free to vary as we estimate statistical
                      parameters. In the simplest case, the number of degrees of
                      freedom equals your sample size minus the number of
                      parameters you need to estimate. Again, the exact formula
                      depends on the t-test you want to perform - check the
                      sections below for details.
                    </p><br />
                    <p>
                      The degrees of freedom are essential, as they determine
                      the distribution followed by your t-score (under the null
                      hypothesis). If there are d degrees of freedom, then the
                      distribution of the test statistics is the t-Student
                      distribution with d degrees of freedom. This distribution
                      has a shape similar to N(0,1) (bell-shaped and symmetric)
                      but has heavier tails. If the number of degrees of freedom
                      is large ({">"}30), which generically happens for large
                      samples, the t-Student distribution is practically
                      indistinguishable from N(0,1).
                    </p>
                    <br />
                    
                    <p>
                      Recall that the p-value is the probability (calculated
                      under the assumption that the null hypothesis is true)
                      that the test statistic will produce values at least as
                      extreme as the t-score produced for your sample. As
                      probabilities correspond to areas under the density
                      function
                    </p>
                    <br />
                    <p className="font-weight-bold">
                      The following formulae say how to calculate p-value from
                      t-test. By cdft,d we denote the cumulative distribution
                      function of the t-Student distribution with d degrees of
                      freedom:
                    </p>
                    <br />
                    
                     <div className="x2theory">
                      <p className='p_tscore'>1. p-value from left-tailed t-test: <br /></p>
                      <p className='p_tscore'>p-value = cdft,d(tscore)<br></br></p>
                      <p className='p_tscore'>2. p-value from right-tailed t-test: <br /></p>
                      <p className='p_tscore'> p-value = 1 - cdft,d(tscore)<br></br></p>
                      <p className='p_tscore'>3. p-value from two-tailed t-test: <br /></p>
                      <p className='p_tscore'>p-value 2 * cdft,d(−|tscore|)<br></br></p>
                      <p className='p_tscore'>or, equivalently: p-value = 2 - 2 * cdft,d(|tscore|)</p>
                   </div>
                    
                    <br />
                   
                    <p>
                    However, the cdf of the t-distribution is given by a somewhat complicated formula. 
                    To find the p-value by hand, you would need to resort to statistical tables, 
                    where approximate cdf values are collected, or to specialized statistical software. 
                    Fortunately, our t-test calculator determines the p-value from t-test for you in 
                    the blink of an eye!
                    </p>
                    
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="last-heading">If you like the page, please share or like. Questions, comments and suggestions are
                            appreciated.</p>
      </div>
    </>
  );
};

export default T_Score_Theory;
