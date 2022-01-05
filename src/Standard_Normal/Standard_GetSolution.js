import React, {useState} from 'react'

const Standard_GetSolution = ( props ) =>{

        const [tailed, setTailed] = useState();
        const [DecimalValues, setDecimalValues] = useState();
        const [numSign, setSign] = useState();
        
        const handleChange = (event) => {
          console.log("handleChange =======>", event.target.value);
          setTailed(event.target.value);
        };
      
        const handleChangeDecimal = (event) => {
          console.log("handleChange Decimal Value =======>", event.target.value);
          setDecimalValues(event.target.value);
        };
      
        const inputEventNumSign = (event) => {
          console.log(event.target.value);
          setSign(event.target.value);
        };
      
        const solutionButtonClick = () => {
            props.getSolutionData(tailed, numSign, DecimalValues);
            props.sendtoparent(true);
        };

    return(
        <>
        <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>What type of test? :</p>
                                        </div>
                                        <div className='ol-lg-6 col-6 mar'>
                                            <select className="inputfield" id="test" name="testlist"  value={tailed} onChange={handleChange}>
                                            <option className="inputfield" value="Select">Select</option>
                                                <option className="inputfield" value="Left-Tailed">Left-Tailed</option>
                                                <option clacssName="inputfield" value="Right-Tailed">Right-Tailed</option>
                                                <option className="inputfield" value="Two-Tailed">Two-Tailed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Significance Level :</p>
                                        </div>
                                        <div className='col-lg-6 col-6 mar'>
                                            <input type="text" className="inputfield" onChange={inputEventNumSign} value={numSign} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Decimal Point :</p>
                                        </div>
                                        <div className='ol-lg-6 col-6 mar'>
                                            <select className="inputfield" id="test" name="testlist" value={DecimalValues} onChange={handleChangeDecimal} >
                                                <option className="inputfield" value="1">1</option>
                                                <option className="inputfield" value="2">2</option>
                                                <option clacssName="inputfield" value="3">3</option>
                                                <option clacssName="inputfield" value="4">4</option>
                                                <option clacssName="inputfield" value="5">5</option>
                                                <option clacssName="inputfield" value="6">6</option>
                                                <option clacssName="inputfield" value="7">7</option>
                                                <option clacssName="inputfield" value="8">8</option>
                                                <option clacssName="inputfield" value="9">9</option>
                                                <option clacssName="inputfield" value="10">10</option>
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
                    <button type="submit" className="solution-btn" onClick={solutionButtonClick}>Solution</button>
                </div>

            </div>
        </>
    )
}
export default Standard_GetSolution;