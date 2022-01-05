import React, { useState, useEffect } from "react";
import Try_Calc from "../Critical_Calc/Try_Calc";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";
import Negative1 from "../assets/Images/Negative1.png";
import Negative2 from "../assets/Images/Negative2.png";

const Negative_Solution = (props) => {
  
  /* ------------ = Equal ----------- */

  const [Success, setSuccess] = useState(0);

  useEffect(() => {
    let result = jStat.negbin.pdf(
      parseFloat(props.getSolutionDataObject.numEqual),
      parseFloat(props.getSolutionDataObject.numTrails), 
      parseFloat(props.getSolutionDataObject.numProbability)
      );
    console.log("res =========>", result);
    setSuccess(result);
  });

  /* ------------ Less ----------- */

  const [Success1, setSuccess1] = useState(0);

  useEffect(() => {
    let result1 = jStat.negbin.cdf(
      parseFloat(props.getSolutionDataObject.numEqual),
      parseFloat(props.getSolutionDataObject.numTrails), 
      parseFloat(props.getSolutionDataObject.numProbability)
    ) - Success;
    console.log("res =========>", result1);
    setSuccess1(result1);
  });

  /* ------------ Less Than Equal ----------- */

  const [Success2, setSuccess2] = useState(0);

  useEffect(() => {
    let result2 = jStat.negbin.cdf(
      parseFloat(props.getSolutionDataObject.numEqual),
      parseFloat(props.getSolutionDataObject.numTrails), 
      parseFloat(props.getSolutionDataObject.numProbability)
    );
    console.log("res =========>", result2);
    setSuccess2(result2);
  });

  /* ------------ Less Than and Less Than ----------- */

  const [Success3, setSuccess3] = useState(0);

  useEffect(() => {
    let result3 = jStat.negbin.cdf(
      parseFloat(props.getSolutionDataObject.numEqual),
      parseFloat(props.getSolutionDataObject.numTrails),
      parseFloat(props.getSolutionDataObject.numProbability)
    ) - Success;
    console.log("res =========>", result3);
    setSuccess3(result3);
  });

  /* ------------ Less Than or Equal and Less Than or equal----------- */

  const [Success4, setSuccess4] = useState(0);

  useEffect(() => {
    let result4 = jStat.negbin.cdf(
      parseFloat(props.getSolutionDataObject.numEqual),
      parseFloat(props.getSolutionDataObject.numTrails),
      parseFloat(props.getSolutionDataObject.numProbability)
    ) - Success - Success2;
    console.log("res =========>", result4);
    setSuccess4(result4);
  });

  /* ---------------- Greater Than   -------------- */

  const [Success5, setSuccess5] = useState(0);

  useEffect(() => {
    let result5 = 1 - jStat.negbin.cdf(
      parseFloat(props.getSolutionDataObject.numEqual),
      parseFloat(props.getSolutionDataObject.numTrails), 
      parseFloat(props.getSolutionDataObject.numProbability)
    );
    console.log("res =========>", result5);
    setSuccess5(result5);
  });

  /* ---------------- Greater Than Equal   -------------- */

  const [Success6, setSuccess6] = useState(0);

  useEffect(() => {
    let result6 = Success + 1 - jStat.negbin.cdf(
      parseFloat(props.getSolutionDataObject.numEqual),
      parseFloat(props.getSolutionDataObject.numTrails), 
      parseFloat(props.getSolutionDataObject.numProbability)
    );
    console.log("res =========>", result6);
    setSuccess6(result6);
  });

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
                  <p className="sol-text">Solution :</p>
                  <p>The Following information has been provided :</p>
                  <div className="soln-box">
                    <div class="row1">
                      <p>Probability of success (P) = </p>
                      <p>{props.getSolutionDataObject.numProbability}</p>
                    </div>
                    <div class="row2">
                      <p>Population Probability of Failure (q = 1- p) = </p>
                      <p>{props.getSolutionDataObject.numTrails}</p>
                    </div>
                  </div>
                  <p>Find</p>
                  <div className="sol-box">
                    <div className="soln-box">
                      <div class="row2">
                        <p>Probability Event = </p>
                        <p>{props.getSolutionDataObject.numEqual}</p>
                      </div>
                    </div>
                  </div>

                  <p>Negative Probability Distribution Formula :</p>
                  <div
                    className="btformula mt-3 mb-3 "
                    style={{ textAlign: "center" }}
                  >
                    <img src={Negative1} />
                  </div>
                  <p>This implies that,</p>
                  <p> r=1, p=0.20, n=3</p>
                  <p> P(n=3) = ?</p>
                  <div
                    className="btformula mt-3 mb-3 "
                    style={{ textAlign: "center" }}
                  >
                    <p>p=0.20, 1-p=0.80, r=1, n=3</p>
                  </div>
                  <div
                    className="btformula mt-3 mb-3 "
                    style={{ textAlign: "center" }}
                  >
                    <img src={Negative2} />
                  </div>
                  <p style={{ marginLeft: "26%" }}>= {Success}</p>
                </div>
                <br></br>
                <br></br>
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

export default Negative_Solution;
