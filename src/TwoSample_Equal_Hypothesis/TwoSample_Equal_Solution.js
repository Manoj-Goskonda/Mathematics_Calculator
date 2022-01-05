import React, { useState, useEffect } from "react";
import Try_Calc from "../Critical_Calc/Try_Calc";
import Twosampleequal1 from "../assets/Images/Twosampleequal1.png";
import Twosampleequal2 from "../assets/Images/Twosampleequal2.png";
import Hypothesis3 from "../assets/Images/Hypothesis3.png";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";

const TwoSample_Equal_Solution = (props) => {
  /* -------------------- Grounp Name 1 ---------------------- */

  /* -------------------- Critical Value ---------------------- */

  /* ------------ Left Side ------------ */

  const [critical, setCritical] = useState(0);

  useEffect(() => {
    let result = jStat.studentt.inv(
      parseFloat(props.getSolutionDataObject.numProbability),
      parseFloat(props.getSolutionDataObject.numSampleSize)
    );
    console.log("res =========>", result);
    result = result.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result);
    setCritical(result);
  });

  /* ------------ Right Side ------------ */

  const [critical1, setCritical1] = useState(0);

  useEffect(() => {
    let result1 = jStat.studentt.inv(
      1 - parseFloat(props.getSolutionDataObject.numProbability),
      parseFloat(props.getSolutionDataObject.numSampleSize)
    );

    console.log("res =========>", result1);
    result1 = result1.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result1);
    setCritical1(result1);
  });

  /* ------------ Two Tailed ------------ */

  const [critical2, setCritical2] = useState(0);

  useEffect(() => {
    let result2 = jStat.studentt.inv(
      1 - parseFloat(props.getSolutionDataObject.numProbability) / 2,
      parseFloat(props.getSolutionDataObject.numSampleSize)
    );

    console.log("res =========>", result2);
    result2 = result2.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result2);
    setCritical2(result2);
  });

  //  /* ------------ Two Tailed 1 ------------ */

  //  const [critical3, setCritical3] = useState(0);

  //  useEffect(() => {
  //    let result3 = jStat.studentt.inv(
  //      props.getSolutionDataObject.numSign / 2,
  //      props.getSolutionDataObject.numDof
  //    );

  //    console.log("res =========>", result3);
  //    result3 = result3.toFixed(props.getSolutionDataObject.numDecimalPoint);
  //   console.log("result.toFixed(10); =========>", result3);
  //    setCritical3(result3);
  //  });

  /* ------------------------ P Value ----------------------- */

  /* -------------- Left Tailed -------------- */
  const [critical4, setCritical4] = useState(0);

  useEffect(() => {
    let result4 = jStat.studentt.cdf(
      parseFloat(critical10),
      parseFloat(props.getSolutionDataObject.numSampleSize - 1)
    );

    console.log("res =========>", result4);
    result4 = result4.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result4.toFixed(10); =========>", result4);
    setCritical4(result4);
  });

  /* -------------- Right Tailed -------------- */
  const [critical5, setCritical5] = useState(0);

  useEffect(() => {
    let result5 =
      1 -
      jStat.studentt.cdf(
        parseFloat(critical10),
        parseFloat(props.getSolutionDataObject.numSampleSize - 1)
      );

    console.log("res =========>", result5);
    result5 = result5.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result5);
    setCritical5(result5);
  });

  /* -------------- Two Tailed -------------- */
  const [critical6, setCritical6] = useState(0);

  useEffect(() => {
    let result6 =
      2 -
      2 *
        jStat.studentt.cdf(
          parseFloat(critical10),
          parseFloat(props.getSolutionDataObject.numSampleSize - 1)
        );

    console.log("res =========>", result6);
    result6 = result6.toFixed(props.getSolutionDataObject.DecimalValues);
    console.log("result.toFixed(10); =========>", result6);
    setCritical6(result6);
  });

  /* ----------------- Enter summarized data (μ0, x̅, n, s) below --------------------- */

  const [critical10, setCritical10] = useState(0);

  useEffect(() => {
    let result10 = -jStat.tscore(
      parseFloat(props.getSolutionDataObject.numMeanDifference),
      parseFloat(props.getSolutionDataObject.numSampleAvg),
      parseFloat(props.getSolutionDataObject.numSampleSD),
      parseFloat(props.getSolutionDataObject.numSampleSize)
    );

    console.log("res =========>", result10);
    result10 = result10.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result10);
    setCritical10(result10);
  });

  /* -------------------- Grounp Name 2 ---------------------- */
  /* -------------------- Critical Value ---------------------- */

  /* ------------ Left Side ------------ */

  const [critical12, setCritical12] = useState(0);

  useEffect(() => {
    let result12 = jStat.studentt.inv(
      parseFloat(props.getSolutionDataObject.numProbability),
      parseFloat(props.getSolutionDataObject.numSampleSize1)
    );
    console.log("res =========>", result12);
    result12 = result12.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result12);
    setCritical12(result12);
  });

  /* ------------ Right Side ------------ */

  const [critical11, setCritical11] = useState(0);

  useEffect(() => {
    let result11 = jStat.studentt.inv(
      1 - parseFloat(props.getSolutionDataObject.numProbability),
      parseFloat(props.getSolutionDataObject.numSampleSize1)
    );

    console.log("res =========>", result11);
    result11 = result11.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result11);
    setCritical11(result11);
  });

  /* ------------ Two Tailed ------------ */

  const [critical21, setCritical21] = useState(0);

  useEffect(() => {
    let result21 = jStat.studentt.inv(
      1 - parseFloat(props.getSolutionDataObject.numProbability) / 2,
      parseFloat(props.getSolutionDataObject.numSampleSize1)
    );

    console.log("res =========>", result21);
    result21 = result21.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result21);
    setCritical21(result21);
  });

  //  /* ------------ Two Tailed 1 ------------ */

  //  const [critical3, setCritical3] = useState(0);

  //  useEffect(() => {
  //    let result3 = jStat.studentt.inv(
  //      props.getSolutionDataObject.numSign / 2,
  //      props.getSolutionDataObject.numDof
  //    );

  //    console.log("res =========>", result3);
  //    result3 = result3.toFixed(props.getSolutionDataObject.numDecimalPoint);
  //   console.log("result.toFixed(10); =========>", result3);
  //    setCritical3(result3);
  //  });

  /* ------------------------ P Value ----------------------- */

  /* -------------- Left Tailed -------------- */
  const [critical41, setCritical41] = useState(0);

  useEffect(() => {
    let result41 = jStat.studentt.cdf(
      parseFloat(critical10),
      parseFloat(props.getSolutionDataObject.numSampleSize1 - 1)
    );

    console.log("res =========>", result41);
    result41 = result41.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result4.toFixed(10); =========>", result41);
    setCritical41(result41);
  });

  /* -------------- Right Tailed -------------- */
  const [critical51, setCritical51] = useState(0);

  useEffect(() => {
    let result51 =
      1 -
      jStat.studentt.cdf(
        parseFloat(critical10),
        parseFloat(props.getSolutionDataObject.numSampleSize1 - 1)
      );

    console.log("res =========>", result51);
    result51 = result51.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result51);
    setCritical51(result51);
  });

  /* -------------- Two Tailed -------------- */
  const [critical61, setCritical61] = useState(0);

  useEffect(() => {
    let result61 =
      2 -
      2 *
        jStat.studentt.cdf(
          parseFloat(critical10),
          parseFloat(props.getSolutionDataObject.numSampleSize1 - 1)
        );

    console.log("res =========>", result61);
    result61 = result61.toFixed(props.getSolutionDataObject.DecimalValues);
    console.log("result.toFixed(10); =========>", result61);
    setCritical6(result61);
  });

  /* ----------------- Enter summarized data (μ0, x̅, n, s) below --------------------- */

  const [critical101, setCritical101] = useState(0);

  useEffect(() => {
    let result101 = -jStat.tscore(
      parseFloat(props.getSolutionDataObject.numMeanDifference),
      parseFloat(props.getSolutionDataObject.numSampleAvg1),
      parseFloat(props.getSolutionDataObject.numSampleSD1),
      parseFloat(props.getSolutionDataObject.numSampleSize1)
    );

    console.log("res =========>", result101);
    result101 = result101.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result101);
    setCritical101(result101);
  });

  // /* ---------------------- Row Data --------------------- */

  // const [multiValue, setMultiValue] = useState(0);

  // useEffect(()=>{
  //   let result11 = jStat.studentt.mean(
  //     parseFloat(props.getSolutionDataObject.numMulValue)
  //   );

  //   console.log("res Multiple Value =========>", result11);
  //   result11 = result11.toFixed(props.getSolutionDataObject.numDecimalPoint);
  //   console.log("result.toFixed(10); =========>", result11);
  //   setMultiValue(result11);
  // })

  // /* ---------------------- > Right Operator -------*/
  //   if(critical10 >= critical){
  //     console.log(" Rejected.  =====>")
  //   }else{
  //     console.log("Not Rejected");
  //   }

  // /* ---------------------- < Left Operator -------*/
  //    if(critical10 <= critical){
  //     console.log(" Rejected.  =====>")
  //   }else{
  //     console.log("Not Rejected");
  //   }
  // /* ---------------------- Not Equal Operator -------*/
  // if(critical10 != critical2){
  //   console.log(" Rejected.  =====>")
  // }else{
  //   console.log("Not Rejected");
  // }

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
                  <h1 className="get-text">
                    Two Sample (Equal Varience Test) :
                  </h1>
                  <h5 className="sol-text">Solution:</h5>
                  <p>The Following information has been provided :</p>
                  <div className="soln-box">
                    <div class="row1">
                      <p>Sample Mean (x̅1) = </p>
                      <p>{props.getSolutionDataObject.numSampleAvg}</p>
                      <p>Sample Mean (x̅2) = </p>
                      <p>{props.getSolutionDataObject.numSampleAvg1}</p>
                    </div>
                    <div class="row2">
                      <p>Sample Standard deviation (s1) = </p>
                      <p>{props.getSolutionDataObject.numSampleSD}</p>
                      <p>Sample Standard deviation (s2) = </p>
                      <p>{props.getSolutionDataObject.numSampleSD1}</p>
                    </div>
                    <div class="row1">
                      <p>Sample size (n1) = </p>
                      <p>{props.getSolutionDataObject.numSampleSize}</p>
                      <p>Sample size (n2) = </p>
                      <p>{props.getSolutionDataObject.numSampleSize1}</p>
                    </div>
                    <div class="row2">
                      <p>Significance Level (α) = </p>
                      <p>{props.getSolutionDataObject.numProbability}</p>
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                  <h2 className="sol1-text">• Hypothesis :</h2>
                  <p>The null & alternative hypothesis will be as follows :</p>
                  <div className="sigsoln">
                    <div className="significance">
                      <li>H0 : μ1 = μ2 </li>
                    </div>
                    <div className="significance">
                      <li>Ha : μ1 ≠ μ2 </li>
                    </div>
                    <p>
                      This is a two tailed test, for two population means with
                      two independent samples, unknown population Standard
                      deviation.
                    </p>
                  </div>
                  <h2 className="sol1-text">• Test Statistic :</h2>
                  <p>
                    The t-statistic is computed as follows by assuming equal
                    varience :
                  </p>
                  <div>
                    <img className="theory-graph-img" src={Twosampleequal1} />
                  </div>
                  <h2 className="sol1-text">• Critical Value :</h2>
                  <p>
                    Here, Confidence level = 0.95, α = 0.05 & df are computed as
                    below for equal variances, df = n1 + n2 - 2 = 77.
                  </p>
                  <p>
                    From t -table, critical value of two tailed test is tc =
                    1.991
                  </p>
                  <h2 className="sol1-text"> • P - Value :</h2>
                  <p>Using excel command , we can find desired p-value</p>

                  <div className="sigsolution">
                    <p className="mt-2">
                      p-value = TDIST (test static, df, no.of tails)
                    </p>
                    <p className="mt-2">= TDIST (3.651, 77, 2)</p>
                    <p className="mt-2">= 0.0005</p>
                  </div>
                  <h2 className="sol1-text">• Decision Criteria :</h2>
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
                  <p className="sol1-text">• Decision :</p>
                  {/* <p>Since, it is observed that, test statistic = -13.856 falls in  */}
                  {/* rejection region, | t | > tc = 2.012,</p> */}
                  {/* <p>Using p-value,   p-value = 0 < 0.05, If is concluded that null */}
                  {/* hypothesis is rejected.</p> */}
                  <br></br>
                  {/* <p>Using p-value,   p-value = 0 < 0.05, If is concluded that null  hypothesis is rejected </p> */}
                  <h2 className="sol1-text">• Conclusion :</h2>
                  <p>
                    There is sufficient evidence to conclude that the population
                    mean μ1 is different than population mean μ2 at 0.05 level
                    of significance.
                  </p>
                  <br></br>
                  <div className="col-lg-6 col-6">
                    <div className="row">
                      <h3 className="get-text">Conclusion (Optional)</h3>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="FormConrolTextarea1"></label>
                    <textarea
                      className="form-control"
                      id="exampleFromControlTextarea1"
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
                  <h1 className="get-text">Information</h1>
                  <h3 className="sol-text">Assumptions :</h3>
                  <p>1.Independent observations.</p>
                  <p>2.Data in group are normally distributed.</p>
                  <h3 className="sol-text">Required Data :</h3>
                  <div className="col-lg-12 col-12">
                    <div className="row align-items-baseline">
                      <div className="col-lg-lg-1 col-1">
                        <p className="required">x̅</p>
                      </div>
                      <div className="col-lg-6 col-6">
                        <h5>x̅1, x̅2 - Sample average of group1 and group2</h5>
                      </div>
                    </div>
                    <div className="row align-items-baseline">
                      <div className="col-lg-lg-1 col-1">
                        <p className="required">n</p>
                      </div>
                      <div className="col-lg-6 col-6">
                        <h5>n1,n2 - Sample size of group1 and group2</h5>
                      </div>
                    </div>
                    <div className="row align-items-baseline">
                      <div className="col-lg-lg-1 col-1">
                        <p className="required">s</p>
                      </div>
                      <div className="col-lg-6 col-6">
                        <h5>
                          S1,S2 - Sample standard deviation of group1 and group2
                        </h5>
                      </div>
                    </div>
                  </div>
                  <h3 className="sol-text">Hypothesis :</h3>
                  <div className="pl-5 pb-3">
                    <p>Ho: μ1 = μ2 + d</p>
                    <p>Vs</p>
                    <p>Ha: μ2 ≠ μ2 + d</p>
                  </div>
                  <h3 className="sol-text">Test Statistic :</h3>
                  <div>
                    <img className="theory-graph-img" src={Twosampleequal2} />
                  </div>
                  <p>
                    <span style={{ color: "#ea4335" }}> Critical Value </span>{" "}
                    with n1 + n2 - 2 degrees of freedom & pre-selected level of
                    significance (α). significance (α).
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

      <Try_Calc />
    </>
  );
};

export default TwoSample_Equal_Solution;
