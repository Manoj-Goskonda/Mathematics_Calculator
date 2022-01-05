import React,{useState,useEffect} from "react";
import Try_Calc from "../Critical_Calc/Try_Calc";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";
import Hypothesis1 from "../assets/Images/Hypothesis1.png";
import Hypothesis3 from "../assets/Images/Hypothesis3.png";

const OneSample_Hypothesis_Solution = (props) => {

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
    let result1 = jStat.studentt.inv(1 - 
      parseFloat(props.getSolutionDataObject.numProbability),
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
    let result5 = 1 - jStat.studentt.cdf(
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
    let result6 = 2 - 2 * jStat.studentt.cdf(
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
    let result10 = - jStat.tscore(  
      parseFloat(props.getSolutionDataObject.numPopulationMean),
      parseFloat(props.getSolutionDataObject.numSampleAvg),
      parseFloat(props.getSolutionDataObject.numSampleSD),
      parseFloat(props.getSolutionDataObject.numSampleSize),
    );

    console.log("res =========>", result10);
    result10 = result10.toFixed(props.getSolutionDataObject.numDecimalPoint);
    console.log("result.toFixed(10); =========>", result10);
    setCritical10(result10);
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
                  <p className="get-text">One Sample Test</p>
                  <p className="sol-text">Solution:</p>
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
                      <p>Sample standard deviation (s) = </p>
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
                  <p className="sol1-text">• Hypothesis :</p>
                  <p>The null {"&"} alternative hypothesis will be as follows :</p>
                  <div className="sigsoln">
                    <div className="significance">
                      <li>H0 : μ = </li>
                      <p>{props.getSolutionDataObject.numPopulationMean}</p>
                    </div>
                    <div className="significance">
                      <li>Ha : μ = </li>
                      <p>{props.getSolutionDataObject.numPopulationMean}</p>
                    </div>
                    <p>
                      This is a two tailed test, for one population mean with
                      Unknown Population Standard deviation Here we use Sample
                      Standard deviation.
                    </p>
                  </div>
                  <p className="sol1-text">• Test Statistic :</p>
                  <p>The t-statistic is computed as follows :</p>
                  <div>
                    <img className="theory-graph-img" src={Hypothesis1} />
                  </div>
                  <p className="sol1-text">• Critical Value :</p>
                  <p>
                    Here, Confidence level = 0.95, α = {props.getSolutionDataObject.numProbability} {"&"} df = n - 1 = 47
                    From t table , the critical value of two tailed test is tc =
                    0.012
                  </p>
                  <p className="sol1-text"> • P - Value :</p>
                  <p>Using excel command , we can find desired p-value</p>

                  <div className="sigsolution">
                    <p className="mt-2">
                      p-value = TDIST (test statistic, df, no.of tails)
                    </p>
                    <p className="mt-2">= TDIST (13.856, 47, 2)</p>
                    <p className="mt-2">= 0</p>
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
                      <li><p>5% Rejection region of t-statistic is R : {"[ t : t < -2.012 / t > 2.012 ]"}.If test statistic falls in this region then we reject Ho.</p></li>
                      <br></br>
                    </ul>
                  </div>
                  <p>• P- Value Approach :</p>
                  <div className="pl-5 pb-3">
                    <ul>
                      <li><p>If p-value {"< α (level of significance)"}  then we reject Ho, Otherwise fail to reject Ho.</p></li>
                      <br></br>
                    </ul>
                  </div>
                  <p className="sol1-text">• Decision :</p>
                  <p>
                    Since, it is observed that, test statistic = -13.856 falls
                    in rejection region, | t | {">"} tc = 2.012, we reject the null
                    hypothesis.
                  </p>
                  <br></br>
                  <p>Using p-value,   p-value = {"0 < 0.05"}, If is concluded that null  hypothesis is rejected </p>
                  <p className="sol1-text">• Conclusion :</p>
                  <p>
                    There is sufficient evidence to conclude that the population
                    mean is different than 50 at 0.05 level of significance
                  </p>
                  <br></br>
                  <div className="col-lg-6 col-6">
                    <div className="row">
                      <p className="get-text">Conclusion (Optional)</p>
                    </div>
                  </div>
                  <div className="soln-box">
                    <p className="sol-text"></p>
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
                  <p className="sol-text">Required Data :</p>
                  <div className="soln-box">
                    <div class="row1">
                      <p>Population Mean (μ) = </p>
                      <p>50</p>
                    </div>
                    <div class="row2">
                      <p>Sample Mean (x) = </p>
                      <p>48</p>
                    </div>
                    <div class="row1">
                      <p>Sample standard deviation (s) = </p>
                      <p>1</p>
                    </div>
                    <div class="row2">
                      <p>Sample size (n) = </p>
                      <p>48</p>
                    </div>
                    <div class="row1">
                      <p>Significance Level (α) = </p>
                      <p>0.05</p>
                    </div>
                  </div>
                  <p className="sol-text">Hypothesis :</p>
                  <div className="pl-5 pb-3">
                    <p>H0 : μ = μ0 </p>
                    <p>Vs</p>
                    <p>H1: μ= μ0</p>
                  </div>
                  <p className="sol-text">Test Statistic :</p>
                  <div className="pl-5 pb-3">
                    <p>H0 : μ = μ0 </p>
                    <p>Vs</p>
                    <p>H1: μ= μ0</p>
                  </div>
                  <p className="sol-text">
                    Critical Value with n - 1 degrees of freedom {"&"} pre-selected
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

      <Try_Calc />
    </>
  );
};

export default OneSample_Hypothesis_Solution;
