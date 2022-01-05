import React from "react";
import Try_Calc from "../Critical_Calc/Try_Calc";
import Onesampleztest1 from "../assets/Images/Onesampleztest1.png";
import Onesampleztest4 from "../assets/Images/Onesampleztest4.png";
import Onesampleztest5 from "../assets/Images/Onesampleztest5.png";

const Onesample_Ztest_Solution = (props) => {

  return (
    <>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="pb-100">
            {/* <button type="submit" class="back-btn"><svg width="20" height="20" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5 25.75L18 25.75V32C17.9999 32.2472 17.9266 32.4888 17.7893 32.6943C17.6519 32.8998 17.4567 33.06 17.2283 33.1546C16.9999 33.2492 16.7487 33.2739 16.5062 33.2257C16.2638 33.1775 16.0411 33.0585 15.8662 32.8837L0.866249 17.8837C0.631908 17.6493 0.500267 17.3314 0.500267 17C0.500267 16.6685 0.631908 16.3506 0.866249 16.1162L15.8662 1.11623C16.0411 0.941466 16.2638 0.822458 16.5062 0.774248C16.7487 0.726039 16.9999 0.750793 17.2283 0.84538C17.4567 0.939968 17.6519 1.10014 17.7893 1.30565C17.9266 1.51117 17.9999 1.75279 18 1.99998V8.24998L30.5 8.24998C31.1628 8.25064 31.7983 8.51424 32.267 8.98294C32.7357 9.45164 32.9993 10.0871 33 10.75L33 23.25C32.999 23.9127 32.7353 24.548 32.2667 25.0166C31.798 25.4853 31.1627 25.749 30.5 25.75ZM3.5175 17L15.5 28.9825V23.25L30.5 23.25L30.5 10.75L15.5 10.75L15.5 5.01748L3.5175 17Z" fill="white" />
                </svg>
                </button> */}
          </div>
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <p className="sol-text">Solution</p>
                  <p>The Following information has been provided :</p>
                  <div className="soln-box">
                    <div class="row1">
                      <p>Population Mean (μ) = </p>
                      <p>{props.getSolutionDataObject.numPopulationMean}</p>
                    </div>
                    <div class="row2">
                      <p>Sample Mean (x) = </p>
                      <p>{props.getSolutionDataObject.numSampleAvg}</p>
                    </div>
                    <div class="row1">
                      <p>Population Standard deviation (σ) = </p>
                      <p>{props.getSolutionDataObject.numSampleSD}</p>
                    </div>
                    <div class="row2">
                      <p>Sample size (n) = </p>
                      <p>{props.getSolutionDataObject.numSampleSize}</p>
                    </div>
                    <div class="row1">
                      <p>Significance Level (α) = </p>
                      <p>{props.getSolutionDataObject.numProbability}</p>
                    </div>
                  </div>
                  <h3>• Hypothesis :</h3>
                  <p>The null & alternative hypothesis will be as follows :</p>
                  <div className="sol-box">
                    <div className="criticalbox1">
                      <li>H0 : μ = </li>
                      <p>{props.getSolutionDataObject.numPopulationMean}</p>
                    </div>
                    <div className="criticalbox1">
                      <li>Ha : μ ≠ </li>
                      <p>{props.getSolutionDataObject.numPopulationMean}</p>
                    </div>
                  </div>
                  <p>
                    This is a two tailed test, for one population mean with
                    Known Population Standard deviation.
                  </p>
                  <h3>• Test Statistic :</h3>
                  <p>The z-statistic is computed as follows :</p>
                  <div
                    className="btformula mt-3 mb-3 "
                    style={{ textAlign: "center" }}
                  >
                    <img className="theory-graph-img" src={Onesampleztest1} />
                  </div>
                  <h3>• Critical Value :</h3>
                  <p>
                    Here, Confidence level = 0.95, α = 0.05 from standard normal
                    z-table,the critical value of two tailed test is zc = 1.96.{" "}
                  </p>
                  <h3> • P - Value :</h3>
                  <p>Using excel command , we can find desired p-value.</p>

                  <div className="sigsolution">
                    <p className="mt-2">
                      p-value = NORM.S.DIST (test statistic, FALSE)
                    </p>
                    <p className="mt-2">= NORM.S.DIST (13.856, FALSE)</p>
                    <p className="mt-2">= 0</p>
                  </div>
                  <h3>• Decision Criteria :</h3>
                  <p className="sol1-text">• Acceptance region :</p>
                  <div className="pl-5 pb-3">
                    <ul>
                      <li>
                        <p>
                          95% Acceptance region of z-statistic is z : [ -1.96 :
                          1.96 ] If test statistic falls in this region then we
                          fail to reject Ho.
                        </p>
                      </li>
                      <br></br>
                    </ul>
                  </div>
                  <p className="sol1-text">• Rejection region :</p>
                  <div className="pl-5 pb-3">
                    <ul>
                      <li><p>5% Rejection region of z-statistic is [ t : t {"<"} -2.012 / t {">"} 2.012 ].If test statistic falls in this region then we reject Ho.</p></li>
                      <br></br>
                    </ul>
                  </div>
                  <p className="sol1-text">• P- Value Approach :</p>
                  <div className="pl-5 pb-3">
                    <ul>
                      {/* <li><p>If p-value < α (level of significance) then we reject Ho, Otherwise fail to reject Ho.</p></li> */}
                      <br></br>
                    </ul>
                  </div>
                  <h3>• Decision :</h3>
                  <p>
                    Since, it is observed that, test statistic = -13.856 falls
                    in rejection region, | t | {">"} tc = 2.012, we reject the null
                    hypothesis.
                  </p>
                  <br></br>
                  <p>Using p-value,   p-value = 0 {"<"} 0.05, If is concluded that null  hypothesis is rejected </p> 
                  <h3>• Conclusion :</h3>
                  <p>
                    There is sufficient evidence to conclude that the population
                    mean is different than 50 at 0.05 level of significance
                  </p>
                  <br></br>
                  <div className="row ">
                    <div className="col-lg-12 col-12 row rowdata">
                      <h3 className="get1-text">Conclusion (Optional)</h3>
                      <div className="btn">
                        <button type="submit" className="solution-btn ml-3">
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="FormControlTextarea1"></label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    />
                  </div>
                  <p className="sol-text">Note :</p>
                  <p>
                    If you want to add any conclusion regarding your problem
                    statement then you can add it above the graph.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row getsolution">
            <div className="col-lg-12 col-12 box">
              <div className="input container">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-12 ">
                    <h1 className="get-text">Information</h1>
                    <h5 className="sol-text">Assumptions :</h5>
                    <p>1.Independent observations.</p>
                    <p>2.Data in group are normally distributed.</p>
                    <h5 className="sol-text">Required Data :</h5>
                    <div className="col-lg-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required">x̅</h5>
                          <h5 className=" ml-lg-2">Sample average</h5>
                        </div>
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required">n</h5>
                          <h5 className=" ml-lg-2">Sample size</h5>
                        </div>
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required">n</h5>
                          <h5 className=" ml-lg-2">Population SD</h5>
                        </div>
                        <div className="col-lg-12 col-12 row align-items-baseline">
                          <h5 className="required">μ</h5>
                          <h5 className=" ml-lg-2">Population Mean</h5>
                        </div>
                      </div>
                    </div>
                    <h5 className="sol-text">Hypothesis :</h5>
                    <div className="pl-5 pb-3">
                      <p>H0 : μ1 = μ0 </p>
                      <p>Vs</p>
                      {/* <p>Ha: μ2 <  μ0</p> */}
                    </div>
                    <h5 className="sol-text">Test Statistic :</h5>
                    <div>
                      <img className="theory-graph-img" src={Onesampleztest4} />
                    </div>
                    <p>
                      <span style={{ color: "#EA4335" }}>Critical Value</span>{" "}
                      with n - 1 degrees of freedom & pre-selected level of
                      significance (α).
                    </p>
                    <br></br>
                    <h5 className="sol-text">T distrubution (Student):</h5>
                    <div>
                      <img className="theory-graph-img" src={Onesampleztest5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button type="submit" className="solution-btn ml-3">
            Download Photo
          </button>
          <button type="submit" className="solution-btn ml-3">
            Save As
          </button>
          <button type="submit" className="solution-btn ml-3">
            7.8k Likes
          </button>
        </div>
      </div>
      <Try_Calc />
    </>
  );
};

export default Onesample_Ztest_Solution;
