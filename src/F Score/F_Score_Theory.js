import React from "react";

const X2_Score_Theory = () => {
  return (
    <>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="container">
                    <br />
                    <br />
                    <p className="font-weight-bold">
                      Finally, the F-score option should be used when you
                      perform a test in which the test statistic follows the
                      F-distribution, also known as the Fisher–Snedecor
                      distribution. The exact shape of an F-distribution depends
                      on two degrees of freedom.
                      <br />
                    </p>
                    <br />
                    <p className="font-weight-bold">
                      To see where those degrees of freedom come from, consider
                      the independent random variables X and Y, which both
                      follow the χ²-distributions with d1 and d2 degrees of
                      freedom, respectively. In that case, the ratio
                      (X/d1)/(Y/d2) follows the F-distribution, with (d1, d2)-
                      degrees of freedom. For this reason, the two parameters d1
                      and d2 are also called the numerator and denominator
                      degrees of freedom
                    </p>
                    <p className="font-weight-bold">
                      The p-value from F-score is given by the following
                      formulae, where we let cdfF,d1,d2 denote the cumulative
                      distribution function of the F-distribution, with (d1,
                      d2)-degrees of freedom:
                    </p>
                    <br />
                    <br />
                    <div className="x2theory">
                      <p className="p_tscore">
                        1. Left-tailed F-test: p-value = cdfF,d1,d2(Fscore)
                        <br />
                      </p>
                      <p className="p_tscore">
                        2. Right-tailed F-test: p-value = 1 - cdfF,d1,d2(Fscore)
                        <br />
                      </p>
                      <p className="p_tscore">
                        3. Two-tailed F-test: p-value =
                        <br />
                      </p>
                      <p className="p_tscore" style={{fontSize:"19px"}}>
                        2 * min{(`cdfF, d1, d2(Fscore), 1 - cdfF, d1, d2(Fscore)`)}
                        <br />
                      </p>
                      <p className="p_tscore">
                      (By min{`(a, b)`} we denote the smaller of the numbers a and b.)
                        <br />
                      </p>
                    </div>
                    <br />
                    <br />
                    <p>
                      Below we list the most important tests that produce
                      F-scores. All of them are right-tailed tests.
                    </p>
                    <p>
                      • A test for the equality of variances in two normally
                      distributed populations. Its test statistic follows the
                      F-distribution with (n - 1, m - 1)-degrees of freedom,
                      where n and m are the respective sample sizes.
                    </p>
                    <p>
                      • ANOVA is used to test the equality of means in three or
                      more groups that come from normally distributed
                      populations with equal variances. We arrive at the
                      F-distribution with (k - 1, n - k)-degrees of freedom,
                      where k is the number of groups, and n is the total sample
                      size (in all groups together).
                    </p>
                    <p>
                      • A test for overall significance of regression analysis.
                      The test statistic has an F-distribution with (k - 1, n -
                      k)-degrees of freedom, where n is the sample size, and k
                      is the number of variables (including the intercept).
                    </p>
                    <p>
                      With the presence of the linear relationship having been
                      established in your data sample with the above test, you
                      can calculate the coefficient of determination, R², which
                      indicates the strength of this relationship.
                    </p>
                    <p>
                      • A test to compare two nested regression models. The test
                      statistic follows the F-distribution with (k2 - k1, n -
                      k2)-degrees of freedom, where k1 and k2 are the number of
                      variables in the smaller and bigger models, respectively,
                      and n is the sample size.
                    </p>
                    <p>
                      You may notice that the F-test of an overall significance
                      is a particular form of the F-test for comparing two
                      nested models: it tests whether our model does
                      significantly better than the model with no predictors
                      (i.e., the intercept-only model).
                    </p>

                    <br />
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

export default X2_Score_Theory;
