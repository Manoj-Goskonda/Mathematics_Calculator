import React from "react";

const Z_Score_Theory = () => {
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
                      Use the Z-score option if your test statistic
                      approximately follows the standard normal distribution
                      N(0,1). Thanks to the central limit theorem, you can count
                      on the approximation if you have a large sample (say at
                      least 50 data points), and treat your distribution as
                      normal.
                      <br />
                    </p>
                    <br />
                    <p className="mt-3 font-weight-bold">
                      How to find p-value from Z-score? In terms of the
                      cumulative distribution function (cdf) of the standard
                      normal distribution, which is traditionally denoted by Φ,
                      it is given by the following formulae:
                    </p>
                    <br />
                    <br />
                    <div className="x2theory">
                      <p className="p_tscore">
                        1. Left-tailed z-test: p-value = Φ(Zscore) <br />
                      </p>

                      <p className="p_tscore">
                        2. Right-tailed z-test: p-value = 1 - Φ(Zscore) <br />
                      </p>

                      <p className="p_tscore">
                        3. Two-tailed z-test: p-value = 2 * Φ(−|Zscore|) <br />
                      </p>

                      <p className="p_tscore">
                        or p-value = 2 - 2 * Φ(|Zscore|)
                      </p>
                    </div>

                    <br />

                    <p>
                      A Z-test most often refers to testing the population mean,
                      or the difference between two population means, in
                      particular between two proportions. You can also find
                      Z-tests in maximum likelihood estimations.
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

export default Z_Score_Theory;
