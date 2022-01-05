import React, { useState } from 'react'
import Poisson_GetSolution from './Poisson_GetSolution'
import Poisson_Theory from './Poisson_Theory'
import Poisson_Solution from './Poisson_Solution'


export const Poisson = () => {
    const [showcode, setshowcode] = useState(false)

    const sendtochild = (index) => {
        setshowcode(index)
    }

    const [getSolutionDataObject,setSolutionDataObject] = useState({});

    const getSolutionData = (numProbability,numEqual) =>{
    console.log("inside Parent ===============>", numProbability,numEqual);
    let dataobj = {};
    dataobj.numProbability = numProbability;
    dataobj.numEqual = numEqual;
    setSolutionDataObject(dataobj);
  }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 subcalheading d-flex' >

                        {/* <h3>Poisson Distribution Calculator</h3>
                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                        </svg></p> */}
                    </div>
                    <br></br>
                    <br></br>
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
                                            <Poisson_GetSolution sendtoparent={sendtochild} getSolutionData={getSolutionData} />
                                        </div>
                                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-3" role="tabpanel">
                                            <Poisson_Solution getSolutionDataObject={getSolutionDataObject}/>
                                        </div> : null}
                                        <div className="tab-pane" id="tabs-4" role="tabpanel">
                                            <Poisson_Theory />
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

export default Poisson;
