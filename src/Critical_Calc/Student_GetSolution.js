import React, { useEffect } from "react";
import { useState } from "react";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";
//import { vows } from "../../node_modules/vows/lib/vows";
import { assert } from "../../node_modules/assert/assert";
import Student from "./Student";

const Student_GetSolution = (props) => {
  // jStat.extend(jStat.studentt, {
  //   pdf: function pdf(numSample, numDof) {
  //     numDof = numDof > 1e100 ? 1e100 : numDof;
  //     return (
  //       (1 / (Math.sqrt(numDof) * jStat.betafn(numSign, numDof / 2))) *
  //       Math.pow(1 + (numSample * numSample) / numDof, -((numDof + 1) / 2))
  //       );
  //   },

  //   cdf: function cdf(numSample, numDof) {
  //     var numDof2 = numDof / 2;
  //     return jStat.ibeta(
  //       (numSample + Math.sqrt(numSample * numSample + numDof)) /
  //         (2 * Math.sqrt(numSample * numSample + numDof)),
  //       numDof2,
  //       numDof2
  //     );
  //   },

  //   inv: function (p, numDof) {
  //     var numSample = jStat.ibetainv(2 * Math.min(p, 1 - p), numSign * numDof, numSign);
  //     numSample = Math.sqrt((numDof * (1 - numSample)) / numSample);
  //     return p > numSign ? numSample : -numSample;
  //   },

  //   mean: function mean(numDof) {
  //     return numDof > 1 ? 0 : undefined;
  //   },

  //   median: function median(/*numDof*/) {
  //     return 0;
  //   },

  //   mode: function mode(/*numDof*/) {
  //     return 0;
  //   },

  //   sample: function sample(numDof) {
  //     return jStat.randn() * Math.sqrt(numDof / (2 * jStat.randg(numDof / 2)));
  //   },

  //   variance: function variance(numDof) {
  //     return numDof > 2
  //       ? numDof / (numDof - 2)
  //       : numDof > 1
  //       ? Infinity
  //       : undefined;
  //   },
  // });

  const [tailed, setTailed] = useState();
  const [LeftTailed,setleftTailed] = useState();
  const [RightTailed,setrightTailed] = useState();
  const [TwoTailed,settwoTailed] = useState();

  const [DecimalValues, setDecimalValues] = useState();

  const [numDof, setNum] = useState();
  const [numSign, setSign] = useState();
  const [numSample, setSample] = useState();

  const handleChange = (event) => {
    console.log("handleChange =======>", event.target.value);
    setTailed(event.target.value);
  };

  const handleChangeLeft = (event) => {
    console.log("Left Tailed =======>", event.target.value);
    setleftTailed(event.target.value);
  };
  
  const handleChangeRight = (event) => {
    console.log("Left Tailed =======>", event.target.value);
    setrightTailed(event.target.value);
  };
  
  const handleChangeTwoTailed = (event) => {
    console.log("Left Tailed =======>", event.target.value);
    settwoTailed(event.target.value);
  };

  const handleChangeDecimal = (event) => {
    console.log("Handle Decimal Value =======>",event.target.value);
    setDecimalValues(event.target.value);
  };

  const inputEventDof = (event) => {
    console.log(event.target.value);
    setNum(event.target.value);
  };

  const inputEventNumSign = (event) => {
    console.log(event.target.value);
    setSign(event.target.value);
  };

  const inputEventNumSample = (event) => {
    console.log(event.target.value);
    setSample(event.target.value);
  };

  const solutionButtonClick = () => {
    let numDofValue = numDof ? numDof : numSample;
    props.getSolutionData(tailed, LeftTailed, RightTailed, TwoTailed, numDofValue, numSign, numSample, DecimalValues);
    props.sendtoparent(true);
  };


  return (
    <>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>What type of test? :</p>
                    </div>
                    <div className="ol-lg-6 col-6 mar">
                      <select
                        className="inputfield"
                        id="test"
                        name="testlist"
                        value={tailed}
                        onChange={handleChange}
                      >
                        <option className="inputfield">Select test</option>
                        <option className="inputfield" value={LeftTailed} onChange={handleChangeLeft}>
                          Left-Tailed
                        </option>
                        <option className="inputfield" value={RightTailed} onChange={handleChangeRight}>
                          Right-Tailed
                        </option>
                        <option className="inputfield" value={TwoTailed} onChange={handleChangeTwoTailed}>
                          Two-Tailed
                        </option>

                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Degrees of freedom (d) : </p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <input
                        type="text"
                        className="inputfield"
                        onChange={inputEventDof}
                        value={numDof}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Significance Level :</p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <input
                        type="text"
                        className="inputfield"
                        onChange={inputEventNumSign}
                        value={numSign}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Sample Size (n) :</p>
                      <p className="smalltext">(optional)</p>
                      <p className="smalltext">
                        Note : If you don’t have degrees of freedom then put
                        sample size (n)
                      </p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <input
                        type="text"
                        className="inputfield"
                        onChange={inputEventNumSample}
                        value={numSample}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 mar col-6 text align-self-center">
                      <p>Decimal Point :</p>
                    </div>
                    <div className="col-lg-6 mar col-6">
                      <select
                        className="inputfield"
                        id="test"
                        name="testlist"
                        value={DecimalValues}
                        onChange={handleChangeDecimal}
                      >
                        <option className="inputfield" value="none">
                          None
                        </option>
                        <option className="inputfield" value="1">
                          1
                        </option>
                        <option className="inputfield" value="2">
                          2
                        </option>
                        <option className="inputfield" value="3">
                          3
                        </option>
                        <option className="inputfield" value="4">
                          4
                        </option>
                        <option className="inputfield" value="5">
                          5
                        </option>
                        <option className="inputfield" value="6">
                          6
                        </option>
                        <option className="inputfield" value="7">
                          7
                        </option>
                        <option className="inputfield" value="8">
                          8
                        </option>
                        <option className="inputfield" value="9">
                          9
                        </option>
                        <option className="inputfield" value="10">
                          10
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        </div>

        <div className="btn">
          <button
            type="submit"
            className="solution-btn"
            onClick={solutionButtonClick}
          >
            Solution
          </button>
        </div>
      </div>
    </>
  );
};

export default Student_GetSolution;
