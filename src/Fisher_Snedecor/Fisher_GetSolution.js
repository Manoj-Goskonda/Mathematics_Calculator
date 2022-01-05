import React,{useState} from 'react'

const Fisher_GetSolution = (props) =>{

   const [tailed, setTailed] = useState();

   const [numDof, setNum] = useState();
   const [numDof1, setNum1] = useState();
   const [numSign, setSign] = useState();
   const [numSample, setSample] = useState();
   const [numSample1, setSample1] = useState();

  const handleChange = (event) => {
    console.log("handleChange =======>", event.target.value);
    setTailed(event.target.value);
  };

  const inputEventDof = (event) => {
    console.log(event.target.value);
    setNum(event.target.value);
  };
  
  const inputEventDof1 = (event) => {
    console.log(event.target.value);
    setNum1(event.target.value);
  };

  const inputEventNumSign = (event) => {
    console.log(event.target.value);
    setSign(event.target.value);
  };

  const inputEventNumSample = (event) => {
    console.log(event.target.value);
    setSample(event.target.value);
  };
  
  const inputEventNumSample1 = (event) => {
    console.log(event.target.value);
    setSample1(event.target.value);
  };

  const solutionButtonClick = () => {
    let numDofValue = numDof ? numDof : numSample;
    let numDofValue1 = numDof1 ? numDof1 : numSample1;
    props.getSolutionData(tailed, numDofValue, numDofValue1, numSign, numSample,numSample1);
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
                                            <select className="inputfield" id="test" name="testlist" value={tailed} onChange={handleChange}>
                                                <option className="inputfield" value="Select">Select</option>
                                                <option className="inputfield" value="Right-Tailed">Right-Tailed </option>
                                                <option className="inputfield" value="Left-Tailed">Left-Tailed</option>
                                                <option className="inputfield" value="Two-Tailed">Two-Tailed </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Numerator degrees of freedom (d₁) :</p>
                                        </div>
                                        <div className='col-lg-6 col-6 mar'>
                                            <input type="text" className="inputfield" onChange={inputEventDof} value={numDof} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Denominator degrees of freedom (d₂) :</p>
                                        </div>
                                        <div className='col-lg-6 col-6 mar'>
                                            <input type="text" className="inputfield" onChange={inputEventDof1} value={numDof1}/>
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
                                            <input type="text" className="inputfield" onChange={inputEventNumSign} value={numSign}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Sample Size (n) :</p>
                                            <span>(optional)</span>
                                            <span>Note : If you don’t have degrees of freedom then put sample size (n)</span>
                                        </div>
                                        <div className='col-lg-6 col-6 mar'>
                                            <input type="text" className="inputfield" onChange={inputEventNumSample} value={numSample}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Sample Size (n2) :</p>
                                            <span>(optional)</span>
                                            <span>Note : If you don’t have degrees of freedom then put sample size (n)</span>
                                        </div>
                                        <div className='col-lg-6 col-6 mar'>
                                            <input type="text" className="inputfield"  onChange={inputEventNumSample1} value={numSample1}/>
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

export default Fisher_GetSolution;