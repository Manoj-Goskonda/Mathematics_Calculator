import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";

const OneSample_Hypothesis_Raw_Data = (props) => {
  const [value, setValue] = useState();

  const [selectRadioBtn, setselectRadioBtn] = useState();
  const [selectRadioBtn1, setselectRadioBtn1] = useState();

  const [numMulValue, setMulValue] = useState(" ");
  const [data_array, setArray] = useState([]);
  const [fromClose, setfromClose] = useState(true);

  const [numInputInsert, setInputNum] = useState([]);

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
  };

  const resetInputField = () => {
    setMulValue(" ");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const HandleCloseBtn = (event) => {
    setfromClose(false);
    console.log("Form Close =====>", event.target.value);
  };

  const handleChangeMultipleValue = (event) => {
    setInputNum(event.target.value);
    console.log("Row Data Calculate Summary ", event.target.value);
    //props.getsolutionMulValue(numMulValue);
  };

  return (
    <div className="col-lg-12 col-12 box row_data">
      <div className="input container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 ">
            <div className="row" style={{ justifyContent: "space-between" }}>
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
              2. When entering data, each value separated by Enter/ space /
              comma
            </p>
            <div className="group-box">
              <div class="row4">
                <p>Group 1 </p>
              </div>
              <div class="">
                <textarea
                  className="text_area"
                  rows="10"
                  cols="34"
                  maxLength="15"
                  value={numMulValue}
                  onChange={handleChangeMulValue}
                  // onClick={showHideKeys(this)}
                />
              </div>
              <p className="sol-text"></p>
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
  );
};

export default OneSample_Hypothesis_Raw_Data;
