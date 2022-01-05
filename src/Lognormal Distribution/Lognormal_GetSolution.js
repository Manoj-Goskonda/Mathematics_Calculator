import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Lognormal1 from "../assets/Images/Lognormal1.png";

const Lognormal_GetSolution = (props) => {
  
  const [numTrails, setTrails] = useState();
  const [numProbability, setProbability] = useState();

  const [numEqual, setEqual] = useState();
  const [numLess, setNumLess] = useState();
  const [numGreater, setNumGreater] = useState();
  const [numLessThan, setNumLessThan] = useState();
  const [numLessThan1, setNumLessThan1] = useState();

  const [numOperator, setNumOperator] = useState();
  const [numOperatorLess, setNumOperatorLess] = useState();
  const [numOperatorGreater, setNumOperatorGreater] = useState();
  const [numOperatorLessThan, setNumOperatorLessThan] = useState();
  const [numOperatorLessThan1, setNumOperatorLessThan1] = useState();

  const [numRadioButton, setnumRadioButton] = useState();

  const [numCreateRadiobtnEqual, setNumCreateRadiobtnEqual] = useState();
  const [numCreateRadiobtnLess, setNumCreateRadiobtnLess] = useState();
  const [numCreateRadiobtnLessThan, setNumCreateRadiobtnLessThan] = useState();
  const [numCreateRadiobtnGreater, setNumCreateRadiobtnGreater] = useState();

  const inputTrails = (event) => {
    console.log("Number of Trails =======>", event.target.value);
    setTrails(event.target.value);
  };

  const inputProbability = (event) => {
    console.log("Probability of success ========>", event.target.value);
    setProbability(event.target.value);
  };

  const inputEqual = (event) => {
    console.log(" Radio Input Value =======>", event.target.value);
    setEqual(event.target.value);
  };

  const inputLess = (event) => {
    console.log(" Radio Input Less Than Value =======>", event.target.value);
    setNumLess(event.target.value);
  };

  const inputGreater = (event) => {
    console.log(" Radio Input Greater Than Value =======>", event.target.value);
    setNumGreater(event.target.value);
  };

  const inputLessThan = (event) => {
    console.log("Radio Input Less Than Value =======>", event.target.value);
    setNumLessThan(event.target.value);
  };

  const inputLessThan1 = (event) => {
    console.log(
      "Radio Input Less Than Equal Value =======>",
      event.target.value
    );
    setNumLessThan1(event.target.value);
  };

  const handleRelationalOperator = (event) => {
    console.log("Relational Operator is =======>", event.target.value);
    setNumOperator(event.target.value);
  };

  const handleRelationalOperatorLess = (event) => {
    console.log(
      "Relational Operator Less than is =======>",
      event.target.value
    );
    setNumOperatorLess(event.target.value);
  };

  const handleRelationalOperatorGreater = (event) => {
    console.log(
      "Relational Operator Greater than is =======>",
      event.target.value
    );
    setNumOperatorGreater(event.target.value);
  };

  const handleRelationalOperatorLessThan = (event) => {
    console.log(
      "Relational Operator Less than equal is =======>",
      event.target.value
    );
    setNumOperatorLessThan(event.target.value);
  };

  const handleRelationalOperatorLessThan1 = (event) => {
    console.log(
      "Relational Operator Less than equal is =======>",
      event.target.value
    );
    setNumOperatorLessThan1(event.target.value);
  };

  const inputRadioButton = (event) => {
    console.log("Click is Radio", event.target.value);
    setnumRadioButton(event.target.value);
  };

  const createRadioButtonEqual = (event) => {
    console.log("created Radio Button Equal =====>", event.target.value);
    setNumCreateRadiobtnEqual(event.target.value);
  };

  const createRadioButtonLess = (event) => {
    console.log("created Radio Button Less =====>", event.target.value);
    setNumCreateRadiobtnLess(event.target.value);
  };

  const createRadioButtonLessThan = (event) => {
    console.log("created Radio Button Less Than =====>", event.target.value);
    setNumCreateRadiobtnLessThan(event.target.value);
  };

  const createRadioButtonGreater = (event) => {
    console.log("created Radio Button Greater Than =====>", event.target.value);
    setNumCreateRadiobtnGreater(event.target.value);
  };

  const solutionButtonClick = () => {
    props.getSolutionData(numTrails, numProbability, numEqual);
    props.sendtoparent(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12  ">
            <br></br>
            <img src={Lognormal1} />

            <div className="container fluid">
              <div className="row getsolution">
                <div className="col-lg-12 col-12 box">
                  <div className="input container">
                    <div className="row justify-content-center">
                      <div className="col-lg-12 col-12 ">
                        <div className="row  justify-content-center">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Scale Parameter (μ) :</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              style={{ backgroundColor: "#FCF0FC" }}
                              placeholder="Ex. 0.5,0.3,0.7"
                              onChange={inputTrails}
                              value={numTrails}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-12 col-12 ">
                        <div className="row  justify-content-center">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Shape Parameter (σ) :</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              style={{ backgroundColor: "#FCF0FC" }}
                              placeholder="Ex. 0.5,0.3,0.7"
                              onChange={inputProbability}
                              value={numProbability}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-12 col-12">
                        <div className="row  justify-content-center">
                          <div className="col-lg-12 col-12 mar text align-self-center">
                            <p>Find Probability :</p>
                            <p className="smalltext">Argument (x) :</p>
                            <p className="smalltext">
                              If you want to find more similar probability then
                              click on + Button.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="formulaMain">
                    <div className="formulaBtn">
                      <div className="AddIcon">
                        <button
                          className="AddIconBtn"
                          type="button"
                          name="submit"
                          value={numCreateRadiobtnEqual}
                          onClick={createRadioButtonEqual}
                        >
                          {" "}
                          +{" "}
                        </button>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            onClick={inputRadioButton}
                            value={numRadioButton}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          />
                        </div>
                        <p style={{ marginLeft: "30px" }}>P ( X</p>
                        <select
                          className="optionformula"
                          value={numOperator}
                          onChange={handleRelationalOperator}
                        >
                          <option value="="> = </option>
                        </select>
                        <input
                          type="text"
                          className="inputvalue"
                          onChange={inputEqual}
                          value={numEqual}
                        />
                        <p style={{ marginLeft: "10px" }}>)</p>
                      </div>
                      <div className="AddIcon">
                        <button
                          className="AddIconBtn"
                          type="button"
                          name="submit"
                          value={numCreateRadiobtnLess}
                          onClick={createRadioButtonLess}
                        >
                          {" "}
                          +{" "}
                        </button>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          />
                        </div>
                        <p style={{ marginLeft: "30px" }}>P ( X</p>
                        <select
                          className="optionformula"
                          value={numOperatorLess}
                          onChange={handleRelationalOperatorLess}
                        >
                          <option value="<"> {"<"} </option>
                          <option value="≤"> {"≤"} </option>
                        </select>
                        <input
                          type="text"
                          className="inputvalue"
                          onChange={inputLess}
                          value={numLess}
                        />
                        <p style={{ marginLeft: "10px" }}>)</p>
                      </div>
                    </div>
                    <br></br>
                    <div className="formulaBtn1">
                      <div className="AddIcon" style={{ marginLeft: "34px" }}>
                        <button
                          className="AddIconBtn"
                          type="button"
                          name="submit"
                          value={numCreateRadiobtnLessThan}
                          onClick={createRadioButtonLessThan}
                        >
                          {" "}
                          +{" "}
                        </button>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          />
                        </div>
                        <p style={{ marginLeft: "30px" }}>P ( </p>
                        <input
                          type="text"
                          className="inputvalue1"
                          onChange={inputLessThan}
                          value={numLessThan}
                        />
                        <select
                          className="optionformula"
                          value={numOperatorLessThan}
                          onChange={handleRelationalOperatorLessThan}
                        >
                          <option value="<"> {"<"} </option>
                          <option value="≤"> {"≤"} </option>
                        </select>
                        <p style={{ marginLeft: "5px" }}>X </p>
                        <select
                          className="optionformula"
                          value={numOperatorLessThan1}
                          onChange={handleRelationalOperatorLessThan1}
                        >
                          <option value="<"> {"<"} </option>
                          <option value="≤"> {"≤"} </option>
                        </select>
                        <input
                          type="text"
                          className="inputvalue"
                          onChange={inputLessThan1}
                          value={numLessThan1}
                        />
                        <p style={{ marginLeft: "10px" }}>)</p>
                      </div>
                      <div className="AddIcon1">
                        <button
                          className="AddIconBtn"
                          style={{ marginRight: "10px" }}
                          type="button"
                          name="submit"
                          value={numCreateRadiobtnGreater}
                          onClick={createRadioButtonGreater}
                        >
                          {" "}
                          +{" "}
                        </button>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          />
                        </div>
                        <p style={{ marginLeft: "30px" }}>P ( X</p>
                        <select
                          className="optionformula"
                          value={numOperatorGreater}
                          onChange={handleRelationalOperatorGreater}
                        >
                          <option value=">"> {">"} </option>
                          <option value="≥"> {"≥"} </option>
                        </select>
                        <input
                          type="text"
                          className="inputvalue"
                          onChange={inputGreater}
                          value={numGreater}
                        />
                        <p style={{ marginLeft: "10px" }}>)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn">
                {/* <button type="submit" className="solution-btn" >Solution</button> */}
                <button
                  type="submit"
                  className="solution-btn"
                  onClick={solutionButtonClick}
                >
                  Solution
                </button>
              </div>
            </div>

            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lognormal_GetSolution;
