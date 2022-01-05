import React from 'react'

const Corr_GetSolution = ({sendtoparent}) =>{
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
                                            <select className="inputfield" id="test" name="testlist" >
                                                <option className="inputfield" value="volvo">Select test</option>
                                                <option className="inputfield" value="saab">Left-Tailed</option>
                                                <option clacssName="inputfield" value="saab">Right-Tailed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Degrees of freedom (d) :</p>
                                        </div>
                                        <div className='col-lg-6 col-6 mar'>
                                            <input type="text" className="inputfield" />
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
                                            <input type="text" className="inputfield" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <p>Sample Size (n) :</p>
                                            <p className="smalltext">(optional)</p>
                                            <p className="smalltext">Note : If you don’t have degrees of freedom then put sample size (n)</p>
                                        </div>
                                        <div className='col-lg-6 col-6 mar'>
                                            <input type="text" className="inputfield" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row  justify-content-center">
                                        <div className='col-lg-6 mar col-6 text align-self-center'>
                                            <p>Decimal Point :</p>
                                        </div>
                                        <div className='col-lg-6 mar col-6'>
                                            <select className="inputfield" id="test" name="testlist" >
                                                <option className="inputfield" value="volvo">None</option>
                                                <option className="inputfield" value="saab">1</option>
                                                <option className="inputfield" value="saab">2</option>
                                                <option className="inputfield" value="saab">3</option>
                                                <option className="inputfield" value="saab">4</option>
                                                <option className="inputfield" value="saab">5</option>
                                                <option className="inputfield" value="saab">6</option>
                                                <option className="inputfield" value="saab">7</option>
                                                <option className="inputfield" value="saab">8</option>
                                                <option className="inputfield" value="saab">9</option>
                                                <option className="inputfield" value="saab">10</option>
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
                    <button type="submit" className="solution-btn" onClick={()=> sendtoparent(true)}>Solution</button>
                </div>

            </div>
        </>
    )
}
export default Corr_GetSolution;