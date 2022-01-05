import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";

const TwoSample_Unequal_GetSolution = (props) => {
  const [changeHypothesis1, setChangeHypothesis1] = useState();
  const [changeHypothesis2, setChangeHypothesis2] = useState();

  const [numProbability, setProbability] = useState();

  const [changeCriticalPValue, setchangeCriticalPValue] = useState();
  const [numDifference, setDifference] = useState();
  const [numTestStatistic, setTestStatistic] = useState();
  // const [numCriticalDecimalPoint, setCriticalDecimalPoint] = useState();
  // const [numPValueDecimalPoint, setPValueDecimalPoint] = useState();

  const [choiceConfidenceInterval, setchoiceConfidenceInterval] = useState();
  const [numDecimalPoint, setnumDecimalPoint] = useState();

  const [numPopulationMean, setPopulationMean] = useState();
  const [numSampleAvg, setSampleAvg] = useState();
  const [numSampleAvg1, setSampleAvg1] = useState();
  const [numSampleSize, setSampleSize] = useState();
  const [numSampleSize1, setSampleSize1] = useState();
  const [numSampleSD, setSampleSD] = useState();
  const [numSampleSD1, setSampleSD1] = useState();

  const [selectRadioBtn, setselectRadioBtn] = useState();
  const [selectRadioBtn1, setselectRadioBtn1] = useState();

  const [numMulValue, setMulValue] = useState();
  const [numMulValue1, setMulValue1] = useState();

  const [fromClose, setfromClose] = useState(true);

  const inputchangeHypothesis1 = (event) => {
    setChangeHypothesis1(event.target.value);
    console.log("Hypothesis1 is ========>", event.target.value);
  };

  const inputchangeHypothesis2 = (event) => {
    setChangeHypothesis2(event.target.value);
    console.log("Hypothesis2 is ========>", event.target.value);
  };

  const inputProbability = (event) => {
    setProbability(event.target.value);
    console.log("Probability is ========>", event.target.value);
  };

  const inputchangeCriticalPValue = (event) => {
    setchangeCriticalPValue(event.target.value);
    console.log("Critical and P Value is ========>");
  };

  const handleChangeDifference = (event) => {
    setDifference(event.target.value);
    console.log("Difference value is =====>", event.target.value);
  };

  const inputnumTestStatistic = (event) => {
    setTestStatistic(event.target.value);
    console.log("Select Test Statistic is ========>", event.target.value);
  };

  // const inputnumCriticalDecimalPoint = (event) => {
  //   setCriticalDecimalPoint(event.target.value);
  //   console.log("Select Test Statistic is ========>", event.target.value);
  // };

  // const inputnumPValueDecimalPoint = (event) => {
  //   setPValueDecimalPoint(event.target.value);
  //   console.log("Select Test Statistic is ========>", event.target.value);
  // };

  const inputchoiceConfidenceInterval = (event) => {
    setchoiceConfidenceInterval(event.target.value);
    console.log("Click Radio Confidence Interval =======>", event.target.value);
  };

  const inputnumDecimalPoint = (event) => {
    setnumDecimalPoint(event.target.value);
    console.log("Select Decimal Point is ========>", event.target.value);
  };

  const inputPopulationMean = (event) => {
    setPopulationMean(event.target.value);
    console.log("Population Mean is ========>", event.target.value);
  };

  const inputSampleAvg = (event) => {
    setSampleAvg(event.target.value);
    console.log("Sample Avg. is ========>", event.target.value);
  };

  const inputSampleAvg1 = (event) => {
    setSampleAvg1(event.target.value);
    console.log("Sample Avg. 1 is ========>", event.target.value);
  };

  const inputSampleSize = (event) => {
    setSampleSize(event.target.value);
    console.log("Sample Size is ========>", event.target.value);
  };

  const inputSampleSize1 = (event) => {
    setSampleSize1(event.target.value);
    console.log("Sample Size 1 is ========>", event.target.value);
  };

  const inputSampleSD = (event) => {
    setSampleSD(event.target.value);
    console.log("Sample SD is ========>", event.target.value);
  };

  const inputSampleSD1 = (event) => {
    setSampleSD1(event.target.value);
    console.log("Sample SD 1 is ========>", event.target.value);
  };

  const inputselectRadioBtn = (event) => {
    setselectRadioBtn(event.target.value);
    console.log("Select Q - Q Plot  is ========>", event.target.value);
  };

  const inputselectRadioBtn1 = (event) => {
    setselectRadioBtn1(event.target.value);
    console.log(
      "Normality(The Shipiro Walk Test) is ========>",
      event.target.value
    );
  };

  // const handleChangeMulValue = (event) => {
  //   setMulValue(event.target.value);
  //   console.log("Multiple Value is =============>", event.target.value);
  // };

  const resetInputField = () => {
    setMulValue(" ");
    setMulValue1(" ");
  };

  const HandleCloseBtn = (event) => {
    setfromClose(false);
    console.log("Form Close =====>", event.target.value);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const solutionButtonClick = () => {
    props.getSolutionData(
      selected,
      changeHypothesis1,
      changeHypothesis2,
      numProbability,
      changeCriticalPValue,
      numDifference,
      numTestStatistic,
      choiceConfidenceInterval,
      numDecimalPoint,
      numPopulationMean,
      numSampleAvg,
      numSampleAvg1,
      numSampleSize,
      numSampleSize1,
      numSampleSD,
      numSampleSD1,
      numMulValue
    );
    props.sendtoparent(true);
  };

  // const [getSolutionDataObject,setSolutionDataObject] = useState({});

  // let getsolutionMulValue = (numMulValue) => {
  //   console.log("inside Parent ===============>",numMulValue);
  //   let dataobject = {};
  //   dataobject.numMulValue = numMulValue;
  //   setSolutionDataObject(dataobject);
  // }

  /* --------------------- Decimal Point Test Statistic, P Value, Critical value   */

  const [selected, setSelected] = useState(" ");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    console.log(
      "Select Decimal Critical and P value is ========>",
      event.target.value
    );
  };

  const [data_array, setArray] = useState([]);
  const [data_array1, setArray1] = useState([]);

  const handleChangeMulValue = (event) => {
    // console.log(numMulValue);
    let a = [];
    let b = [];
    let c = [];
    setMulValue(event.target.value);
    const myArr = event.target.value.split("\n");
    for (let i = 0; i < myArr.length; i++) {
      a = myArr[i].split(" ");
      for (let j = 0; j < a.length; j++) {
        b = a[j].split(",");
        c = c.concat(b);
      }
    }
    let d = [];
    for (let i = 0; i < c.length; i++) {
      if (c[i] != "") {
        d.push(parseFloat(c[i]));
      }
    }
    console.log(d);
    setArray(d);
    let mean = jStat.mean(d);
    let sd = jStat.pooledstdev([d]);
    let sdLess = jStat.stdev(d);
    // if (sdLess < sd) {
    //   console.log("The SD is more than 30");
    // } else {
    //   console.log("The SD less than 30");
    // }
    let sample = d.length;
    console.log(sample);
    console.log(mean);
    console.log(sd);
    console.log(sdLess);
  };

  const handleChangeMulValue1 = (event) => {
    // console.log(numMulValue);
    let a = [];
    let b = [];
    let c = [];
    setMulValue1(event.target.value);
    const myArr = event.target.value.split("\n");
    for (let i = 0; i < myArr.length; i++) {
      a = myArr[i].split(" ");
      for (let j = 0; j < a.length; j++) {
        b = a[j].split(",");
        c = c.concat(b);
      }
    }
    let d = [];
    for (let i = 0; i < c.length; i++) {
      if (c[i] != "") {
        d.push(parseFloat(c[i]));
      }
    }
    console.log(d);
    setArray1(d);
    let mean = jStat.mean(d);
    let sd = jStat.pooledstdev([d]);
    let sdLess = jStat.stdev(d);
    // if (sdLess < sd) {
    //   console.log("The SD is more than 30");
    // } else {
    //   console.log("The SD less than 30");
    // }
    let sample = d.length;
    console.log(sample);
    console.log(mean);
    console.log(sd);
    console.log(sdLess);
  };

  const [numGroupName, sethandleChangeGroupName] = useState();

  const handleChangeGroupName = (event) => {
    sethandleChangeGroupName(event.target.value);
    console.log("Group Name is =====>", event.target.value);
  };

  const [numGroupName1, sethandleChangeGroupName1] = useState();

  const handleChangeGroupName1 = (event) => {
    sethandleChangeGroupName1(event.target.value);
    console.log("Group Name 1 is =====>", event.target.value);
  };

  const [numInputInsert, setInputNum] = useState([]);

  const handleChangeMultipleValue = (event) => {
    setInputNum(event.target.value);
    console.log("Row Data Calculate Summary ", data_array);
    console.log("Row Data Calculate Summary ", data_array1);
    //props.getsolutionMulValue(numMulValue);
  };

  const Teststatistic = ["1", "2", "3"];
  const CriticalValue = ["1", "2", "3"];
  const PValue = ["1", "2", "3", "4"];
  let type = null;
  let options = null;
  if (selected === "Test Statistics") {
    type = Teststatistic;
  } else if (selected === "Critical Value") {
    type = CriticalValue;
  } else if (selected === "P Value") {
    type = PValue;
  }
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <p className="get-text">Enter Data :</p>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="col-lg-12 col-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row" style={{ justifyContent: "flex-end" }}>
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Hypothesis : </p>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>Ho: μ1</p>
                    </div>
                    <div className="col-lg-2 mar">
                      <select
                        className="inputfield"
                        id="test"
                        name="testlist"
                        value={changeHypothesis1}
                        onChange={inputchangeHypothesis1}
                      >
                        <option className="inputfield" value="Select">
                          Select
                        </option>
                        <option className="inputfield" value=" =">
                          {" = "}
                        </option>
                        <option clacssName="inputfield" value="≤">
                          {" ≤ "}
                        </option>
                        <option className="inputfield" value="≥">
                          {" ≥  "}
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>μ2</p>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>Ha: μ1</p>
                    </div>
                    <div className="col-lg-2 mar justify-content">
                      <select
                        className="inputfield"
                        id="test"
                        name="testlist"
                        value={changeHypothesis2}
                        onChange={inputchangeHypothesis2}
                      >
                        <option className="inputfield" value="Select">
                          Select
                        </option>
                        <option className="inputfield" value="≠">
                          {" ≠  "}
                        </option>
                        <option clacssName="inputfield" value="≤">
                          {" ≤ "}
                        </option>
                        <option className="inputfield" value="≥">
                          {" ≥  "}
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>μ2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Significance Level (α) :</p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <input
                        type="text"
                        className="inputfield"
                        placeholder="0.05"
                        onChange={inputProbability}
                        value={numProbability}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Approach :</p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <select
                        className="inputfield"
                        id="test"
                        name="testlist"
                        value={changeCriticalPValue}
                        onChange={inputchangeCriticalPValue}
                      >
                        <option className="inputfield" value="volvo">
                          Both (P Value and Critical Value)
                        </option>
                        <option className="inputfield" value="saab">
                          {" Critical value"}
                        </option>
                        <option className="inputfield" value="saab">
                          {" P value"}
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
                      <p>Difference (d):</p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <input
                        type="text"
                        className="inputfield"
                        placeholder="0"
                        onChange={handleChangeDifference}
                        value={numDifference}
                        style={{ marginBottom: "10px" }}
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
                      <div>
                        <select
                          className="inputfield"
                          id="test"
                          name="testlist"
                          // value={selected}
                          onChange={changeSelectOptionHandler}
                          style={{ marginBottom: "10px" }}
                        >
                          <option>Select Decimal Point</option>
                          <option>Test Statistics</option>
                          <option>Critical Value</option>
                          <option>P Value</option>
                        </select>
                      </div>
                      <div>
                        <select
                          className="inputfield"
                          id="test"
                          name="testlist"
                          value={numTestStatistic}
                          onChange={inputnumTestStatistic}
                        >
                          {options}
                        </select>
                      </div>
                      {/* <div>
                        <select
                          className="inputfield"
                          id="test"
                          name="testlist"
                          value={numCriticalDecimalPoint}
                          onChange={inputnumCriticalDecimalPoint}
                        >
                          {options}
                        </select>
                      </div>
                      <div>
                        <select
                          className="inputfield"
                          id="test"
                          name="testlist"
                          value={numPValueDecimalPoint}
                          onChange={inputnumPValueDecimalPoint}
                        >
                          {options}
                        </select>
                      </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-8 mar col-6 text align-self-center">
                      <FormControlLabel
                        value={choiceConfidenceInterval}
                        onChange={inputchoiceConfidenceInterval}
                        control={<Radio color="primary" />}
                        label="Confidence Interval for mean difference  "
                      />
                    </div>
                    <div className="col-lg-4 mar col-6">
                      <select
                        className="inputfield"
                        id="test"
                        name="testlist"
                        value={numDecimalPoint}
                        onChange={inputnumDecimalPoint}
                      >
                        <option className="inputfield" value="Select">
                          Select Decimal Point
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
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 ">
            <div className="row ">
              <div className="col-lg-6 col-6 mar text align-self-center">
                <h2 className="get-text">
                  Enter summarized data (x̅, n, s) below
                </h2>
              </div>
              <div className="col-lg-3 col-3 mar text align-self-center">
                <div className="btn">
                  <button type="submit" className="solution-btn ml-3">
                    Enter Raw Data
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-3 mar text align-self-center">
                <div className="btn">
                  <button type="submit" className="solution-btn ml-3">
                    From Excel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-12 box">
          <div className="input container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 ">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-6 mar text align-self-center">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="row">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Group Name :</p>
                            <p>(Optional)</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              placeholder="Group 1"
                              value={numGroupName}
                              onChange={handleChangeGroupName}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6 mar text align-self-center">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="row">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Group Name :</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              placeholder="Group 2"
                              value={numGroupName1}
                              onChange={handleChangeGroupName1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-12 ">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-6 mar text align-self-center">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <div className="row">
                              <div className="col-lg-6 col-6 mar text align-self-center">
                                <p>Sample average (x̅1) :</p>
                              </div>
                              <div className="col-lg-6 col-6 mar">
                                <input
                                  type="text"
                                  className="inputfield"
                                  placeholder="5"
                                  value={numSampleAvg}
                                  onChange={inputSampleAvg}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6 mar text align-self-center">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <div className="row">
                              <div className="col-lg-6 col-6 mar text align-self-center">
                                <p>Sample average (x̅2) :</p>
                              </div>
                              <div className="col-lg-6 col-6 mar">
                                <input
                                  type="text"
                                  className="inputfield"
                                  placeholder="0"
                                  value={numSampleAvg1}
                                  onChange={inputSampleAvg1}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-12 ">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-6 mar text align-self-center">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <div className="row">
                              <div className="col-lg-6 col-6 mar text align-self-center">
                                <p>Sample size (n1) :</p>
                                <p>(Optional)</p>
                              </div>
                              <div className="col-lg-6 col-6 mar">
                                <input
                                  type="text"
                                  className="inputfield"
                                  placeholder="4"
                                  value={numSampleSize}
                                  onChange={inputSampleSize}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6 mar text align-self-center">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <div className="row">
                              <div className="col-lg-6 col-6 mar text align-self-center">
                                <p>Sample size (n2) :</p>
                              </div>
                              <div className="col-lg-6 col-6 mar">
                                <input
                                  type="text"
                                  className="inputfield"
                                  placeholder="2"
                                  value={numSampleSize1}
                                  onChange={inputSampleSize1}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-12 ">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-6 mar text align-self-center">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <div className="row">
                              <div className="col-lg-6 col-6 mar text align-self-center">
                                <p>Sample SD (s1) :</p>
                              </div>
                              <div className="col-lg-6 col-6 mar">
                                <input
                                  type="text"
                                  className="inputfield"
                                  placeholder="34"
                                  value={numSampleSD}
                                  onChange={inputSampleSD}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6 mar text align-self-center">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <div className="row">
                              <div className="col-lg-6 col-6 mar text align-self-center">
                                <p>Sample SD (s2) :</p>
                              </div>
                              <div className="col-lg-6 col-6 mar">
                                <input
                                  type="text"
                                  className="inputfield"
                                  placeholder="34"
                                  value={numSampleSD1}
                                  onChange={inputSampleSD1}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <div className="row  justify-content-center">
              <div className="col-lg-6 mar col-6 text align-self-center">
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
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-12 box row_data">
          <div className="input container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 ">
                <div
                  className="row"
                  style={{ justifyContent: "space-between" }}
                >
                  <p className="get-text">Enter Row Data :</p>
                  <HighlightOffIcon
                    type="button"
                    value={fromClose}
                    onClick={HandleCloseBtn}
                  />
                </div>
                <p className="sol-text">Note:</p>
                <p>1.You may change the group name to real name.</p>
                <p>
                  2. When entering data, each value separated by Enter/ Space /
                  Comma
                </p>
                <div className="textarea">
                  <div className="group-box">
                    <div class="row4">
                      <p>Group 1 </p>
                    </div>
                    <div className="">
                      <div className="">
                        <textarea
                          className="text_area"
                          rows="10"
                          cols="34"
                          maxLength="1003"
                          value={numMulValue}
                          onChange={handleChangeMulValue}
                          // onClick={showHideKeys(this)}
                        />
                      </div>
                    </div>
                    <p className="sol-text"></p>
                  </div>
                  <div className="group-box">
                    <div class="row4">
                      <p>Group 2 </p>
                    </div>
                    <div className="">
                      <div className="">
                        <textarea
                          className="text_area"
                          rows="10"
                          cols="34"
                          maxLength="1003"
                          value={numMulValue1}
                          onChange={handleChangeMulValue1}
                          // onClick={showHideKeys(this)}
                        />
                      </div>
                    </div>
                    <p className="sol-text"></p>
                  </div>
                </div>
                <p style={{ fontSize: "18px", marginLeft: "18%" }}>
                  Total Obeservations 4
                </p>
                <br></br>
                <p className="sol-text">Optional :</p>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="qplot"
                    onClick={inputselectRadioBtn}
                    control={<Radio color="primary" />}
                    label="Q - Q plot (Quantile - Quantile Plot) "
                  />
                  <FormControlLabel
                    value="normality"
                    onClick={inputselectRadioBtn1}
                    control={<Radio color="primary" />}
                    label="Normality (The shipiro walk test)"
                  />
                </RadioGroup>
                <div className="col-lg-12 col-6 mar">
                  <div className="btn">
                    <button
                      type="submit"
                      className="solution-btn ml-3"
                      onClick={handleChangeMultipleValue}
                    >
                      Calculate Summary
                    </button>
                    <button
                      type="submit"
                      className="solution-btn ml-3"
                      onClick={resetInputField}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoSample_Unequal_GetSolution;
