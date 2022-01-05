import React,{ useState } from 'react'
import Chi_Square_GetSolution from './Chi_Square_GetSolution';
import Chi_Square_Solution from './Chi_Square_Solution';
import Chi_Square_Theory from './Chi_Square_Theory';


const Chi_Square = () =>{
    const [showcode,setshowcode]=useState(false);

    const sendtochild = (index)=>{
        setshowcode(index);
    }

    const [getSolutionDataObject,setSolutionDataObject] = useState({});

  const getSolutionData = (tailed, numDof, numSign, numSample, DecimalValues) =>{
    console.log("inside Parent ===============>",tailed, numDof, numSign, numSample, DecimalValues);
    let dataobj = {};
    dataobj.tailed = tailed;
    dataobj.numDof = numDof;
    dataobj.numSign = numSign;
    dataobj.numSample = numSample;
    dataobj.DecimalValues = DecimalValues;
    setSolutionDataObject(dataobj);
  }

    return(
        <>
         <div className="row">
                <div classNameName="col-lg-12 col-12 multitabs">
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
                            <Chi_Square_GetSolution sendtoparent={sendtochild} getSolutionData={getSolutionData} />
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-32" role="tabpanel">
                            <Chi_Square_Solution getSolutionDataObject={getSolutionDataObject} />
                        </div> : null}
                        <div className="tab-pane" id="tabs-33" role="tabpanel">
                            <Chi_Square_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chi_Square;