import React from "react";
// import Try_Calc from "../Critical_Calc/Try_Calc";
import Pairedttest1 from "../assets/Images/Pairedttest1.png";
import Hypothesis3 from "../assets/Images/Hypothesis3.png";
import Pairedttest2 from "../assets/Images/Pairedttest2.png";

const Paired_T_Test_Solution = () => {



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
                  <p className="get-text">Paired T-test</p>
                  <p className="sol-text">Solution:</p>
                  <p>The following information has been provided :</p>
                  <div className="soln-box">
                    <div class="row1">
                      <p>Sr. No.</p>
                      <p>Sample 1</p>
                      <p>Sample 1</p>
                      <p>Sample 1</p>
                    </div>
                    <div class="row2">
                      <p>1 </p>
                      <p>62</p>
                      <p>33</p>
                      <p>29</p>
                    </div>
                    <div class="row1">
                      <p>2 </p>
                      <p>4</p>
                      <p>4</p>
                      <p>0</p>
                    </div>
                    <div class="row2">
                      <p>3 </p>
                      <p>5</p>
                      <p>5</p>
                      <p>0</p>
                    </div>
                    <div class="row1">
                      <p>3 </p>
                      <p>87</p>
                      <p>3</p>
                      <p>84</p>
                    </div>
                  </div>
                  <p>From given sample, we obtained the following :</p>
                  <div className="soln-box">
                    <div class="row1">
                      <p>Average </p>
                      <p>x1 = 39.5</p>
                      <p>x2 = 11.25</p>
                      <p>D = 28.25</p>
                    </div>
                    <div class="row2">
                      <p>Standard Deviation </p>
                      <p>s1 = 41.685 </p>
                      <p> s2 = 14.523</p>
                      <p> sd = 39.601</p>
                    </div>
                    <div class="row1">
                      <p>Number of samples </p>
                      <p>n1 = 4</p>
                      <p>n2 = 4</p>
                      <p> n = 4</p>
                    </div>
                  </div>
                  <p className="sol1-text">• Hypothesis :</p>
                  <p>The null & alternative hypothesis will be as follows,</p>
                  <div className="sigsoln">
                    <div className="significance">
                      <li>H0 : μD = </li>
                      <p>0</p>
                    </div>
                    <div className="significance">
                      <li>Ha : μD = 0 </li>
                      <p>0</p>
                    </div>
                  </div>
                  <p className="sol1-text">• Test Statistic :</p>
                  <p>The test statistic is computed as follows,</p>
                  <div>
                    <img className="theory-graph-img" src={Pairedttest1} />
                  </div>
                  <p className="sol1-text">• Critical Value :</p>
                  <p>
                    Here, Confidence level = 0.95, α = 0.05 & df = n - 1 = 3,
                    From t -table, critical value of two tailed test is tc 1.991{" "}
                  </p>
                  <p className="sol1-text"> • P - Value :</p>
                  <p>Using excel command , we can find desired p-value,</p>

                  <div className="sigsolution">
                    <p className="mt-2">
                      p-value = TDIST (test static, df,no.of tails)
                    </p>
                    <p className="mt-2">= TDIST (3.651, 77, 2)</p>
                    <p className="mt-2">= 0.0005</p>
                  </div>
                  <p className="sol1-text">• Decision Criteria :</p>
                  <p>• Acceptance region :</p>
                  <div className="pl-5 pb-3">
                    <ul>
                      <li>
                        <p>
                          95% Acceptance region of t-statistic is t : [ -2.012 :
                          2.012 ]. If test statistic falls in this region then
                          we fail to reject Ho.
                        </p>
                      </li>
                      <br></br>
                    </ul>
                  </div>
                  <p>• Rejection region :</p>
                  <div className="pl-5 pb-3">
                    <ul>
                      {/* <li><p>5% Rejection region of t-statistic is R : [ t : t < -2.012 / t > 2.012 ].If test statistic falls in this region then we reject Ho.</p></li> */}
                      <br></br>
                    </ul>
                  </div>
                  <p>• P- Value Approach :</p>
                  <div className="pl-5 pb-3">
                    <ul>
                      {/* <li><p>If p-value < α (level of significance)  then we reject Ho, Otherwise fail to reject Ho.</p></li> */}
                      <br></br>
                    </ul>
                  </div>
                  <p className="sol1-text">• Decision :</p>
                  <p>
                    Since, it is observed that, test statistic = -13.856 falls
                    in rejection region, | t | {">"} tc = 2.012,
                  </p>
                  <br></br>
                  {/* <p>Using p-value,   p-value = 0 < 0.05, If is concluded that null hypothesis is rejected. </p> */}
                  <p className="sol1-text">• Conclusion :</p>
                  <p>
                    There is sufficient evidence to conclude that the population
                    mean μ1 is different than population mean μ2 at 0.05 level
                    of significance.
                  </p>
                  <br></br>
                  <div className="col-lg-6 col-6">
                    <div className="row">
                      <p className="get-text">Conclusion (Optional)</p>
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
        </div>
        <div className="row getsolution">
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <p className="get-text">Information</p>
                  <p className="sol-text">Assumptions :</p>
                  <p>1.Independent observations.</p>
                  <p>2.Data in group are normally distributed.</p>
                  <p className="sol-text">Hypothesis :</p>
                  <div className="pl-5 pb-3">
                    <p>Ho : μD = 0 </p>
                    <p>Vs</p>
                    <p>Ha : μD = 0 </p>
                  </div>
                  <p className="sol-text">Test Statistic :</p>
                  <div className="pl-5 pb-3">
                    <img className="theory-graph-img" src={Pairedttest2} />
                  </div>
                  <p className="sol-text">
                    Critical Value with n-1 degrees of freedom & pre-selected
                    level of significance (α).
                  </p>
                  <br></br>
                  <p className="sol-text">T distrubution (Student):</p>
                  <div>
                    <img className="theory-graph-img" src={Hypothesis3} />
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

      {/* <Try_Calc /> */}
    </>
  );
};

export default Paired_T_Test_Solution;
