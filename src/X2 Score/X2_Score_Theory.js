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
                    <p>
                      Use the χ²-score option when performing a test in which
                      the test statistic follows the χ²-distribution. This
                      distribution arises, if, for example, you take the sum of
                      squared variables, each following the normal distribution
                      N(0,1). Remember to check the number of degrees of freedom
                      of the χ²-distribution of your test statistic!
                      <br />
                    </p>
                    <br />
                    <p>
                      How to find the p-value from chi-square-score? You can do
                      it with help of the following formulae, in which cdfχ²,d
                      denotes the cumulative distribution function of the
                      χ²-distribution with d degrees of freedom:
                    </p>
                    <br />
                    <br />
                    <div className="x2theory">
                      <p className="p_tscore">
                        1. Left-tailed χ²-test: p-value = cdfχ²,d(χ²score)
                        <br />
                      </p>

                      <p className="p_tscore">
                        2. Right-tailed χ²-test: p-value = 1 - cdfχ²,d(χ²score)
                        <br />
                        Remember that χ²-tests for goodness-of-fit and
                        independence are right-tailed tests! (see below)
                      </p>
                      <p className="p_tscore">
                        3. Two-tailed χ²-test: p-value <br />
                        2 * min{(`cdfχ², d(χ²score), 1 - cdfχ², d(χ²score)`)}
                        <br />
                        (By min{`a, b`} we denote the smaller of the numbers a
                        and b.)
                      </p>
                    </div>
                    <br />
                    <h5 class="theory_question">
                      The most popular tests which lead to a χ²-score are the
                      following :
                    </h5>
                    <br />
                    <p>
                      • Testing whether the variance of normally distributed
                      data has some pre-determined value. In this case, the test
                      statistic has the χ²-distribution with n - 1 degrees of
                      freedom, where n is the sample size. This can be a
                      one-tailed or two-tailed test.
                    </p>
                    <p>
                      • Goodness-of-fit test checks whether the empirical
                      (sample) distribution agrees with some expected
                      probability distribution. In this case, the test statistic
                      follows the χ²-distribution with k - 1 degrees of freedom,
                      where k is the number of classes into which the sample is
                      divided. This is a right-tailed test.
                    </p>
                    <p>
                      • Independence test is used to determine if there is a
                      statistically significant relationship between two
                      variables. In this case, its test statistic is based on
                      the contingency table and follows the χ²-distribution with
                      (r - 1)(c - 1) degrees of freedom, where r is the number
                      of rows and c the number of columns in this contingency
                      table. This also is a right-tailed test.
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
