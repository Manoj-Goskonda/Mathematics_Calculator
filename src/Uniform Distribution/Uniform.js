import React, { useState } from 'react'
import Uniform_GetSolution from './Uniform_GetSolution';
import Uniform_Solution from './Uniform_Solution';
import Uniform_Theory from './Uniform_Theory';


 const Uniform = () => {
    const [showcode, setshowcode] = useState(false)

    const sendtochild = (index) => {
        setshowcode(index)
    }

    const [getSolutionDataObject,setSolutionDataObject] = useState({});

    const getSolutionData = (numTrails, numProbability,numEqual) =>{
    console.log("inside Parent ===============>",numTrails, numProbability,numEqual);
    let dataobj = {};
    dataobj.numTrails = numTrails;
    dataobj.numProbability = numProbability;
    dataobj.numEqual = numEqual;
    setSolutionDataObject(dataobj);
  }

    return (
        <>
        <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>

                        <div className="tab-pane fade show active" id="bidist" role="tabpanel" aria-labelledby="bidist-tab">
                            <div className="row" >
                                <div className="col-lg-12 col-12 multitabs">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item tab">
                                            <a className={`nav-link ${showcode == false ? "active" : " "}`} id="getsolution" data-toggle="tab" href="#tabs-2" role="tab">Get Solution </a>
                                        </li>
                                        {showcode == true ? <li className="nav-item tab">
                                            <a className={`nav-link ${showcode == true ? "active" : " "}`} data-toggle="tab" href="#tabs-3" role="tab" >Solution</a>
                                        </li> : null}
                                        <li className="nav-item tab">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Theory</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content ">
                                        <div className={`tab-pane ${showcode == false ? "active" : " "}`} id="tabs-2" role="tabpanel">
                                            <Uniform_GetSolution sendtoparent={sendtochild} getSolutionData={getSolutionData} />
                                        </div>
                                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-3" role="tabpanel">
                                            <Uniform_Solution getSolutionDataObject={getSolutionDataObject} />
                                        </div> : null}
                                        <div className="tab-pane" id="tabs-4" role="tabpanel">
                                            <Uniform_Theory />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Uniform;
