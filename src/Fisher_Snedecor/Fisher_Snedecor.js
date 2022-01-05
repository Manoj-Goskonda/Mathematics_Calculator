import React,{ useState } from 'react';
import Fisher_Snedecor_GetSolution from '../Fisher_Snedecor/Fisher_GetSolution';
import Fisher_Snedecor_Solution from '../Fisher_Snedecor/Fisher_Solution';
import Fisher_Snedecor_Theory from '../Fisher_Snedecor/Fisher_Theory';


const Fisher_Snedecor = () =>{
    const [showcode,setshowcode]=useState(false);

    const sendtoparent = (index)=>{
        setshowcode(index);
    }

    const [getSolutionDataObject,setSolutionDataObject] = useState({});

  const getSolutionData = (tailed, numDof, numDof1, numSign, numSample,numSample1) =>{
    console.log("inside Parent ===============>",tailed, numDof, numDof1, numSign, numSample,numSample1);
    let dataobj = {};
    dataobj.tailed = tailed;
    dataobj.numDof = numDof;
    dataobj.numDof1 = numDof1;
    dataobj.numSign = numSign;
    dataobj.numSample = numSample;
    dataobj.numSample1 = numSample1;
    setSolutionDataObject(dataobj);
  }

    return(
        <>
         <div className="row">
                <div className="col-lg-12 col-12 multitabs">
                    <ul className="nav nav-tabs tabsinfo" role="tablist">
                        <li className="nav-item tab">
                            <a className={`nav-link ${showcode == false ? "active" : " "}`} id="getsolution" data-toggle="tab" href="#tabs-31" role="tab">Get Solution </a>
                        </li>
                        {showcode == true ? <li className="nav-item tab">
                            <a className={`nav-link ${showcode == true ? "active" : " "}`} data-toggle="tab" href="#tabs-32" role="tab" >Solution</a>
                        </li> : null}
                        <li className="nav-item tab">
                            <a className="nav-link" data-toggle="tab" href="#tabs-33" role="tab">Theory</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane ${showcode == false ? "active" : " "}`} id="tabs-31" role="tabpanel">
                            <Fisher_Snedecor_GetSolution sendtoparent={sendtoparent} getSolutionData={getSolutionData} />
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-32" role="tabpanel">
                            <Fisher_Snedecor_Solution getSolutionDataObject={getSolutionDataObject} />
                        </div> : null}
                        <div className="tab-pane" id="tabs-33" role="tabpanel">
                            <Fisher_Snedecor_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fisher_Snedecor;