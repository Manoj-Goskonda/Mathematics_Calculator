import React,{useState} from 'react';
import pcorr from '../assets/Images/pcorrformula.png'
import X2_Score_GetSolution from './X2_Score_GetSolution';
import X2_Score_Solution from './X2_Score_Solution';
import X2_Score_Theory from './X2_Score_Theory';


const X2_Score = () =>{
    const[showcode,setshowcode]=useState(false)

const sendtochild =(index)=>{
    setshowcode(index)
}

const [getSolutionDataObject,setSolutionDataObject] = useState({});

  const getSolutionData = (tailed, numDof, numSign, DecimalValues) =>{
    console.log("inside Parent ===============>",tailed, numDof, numSign, DecimalValues);
    let dataobj = {};
    dataobj.tailed = tailed;
    dataobj.numDof = numDof;
    dataobj.numSign = numSign;
    // dataobj.numSample = numSample;
    dataobj.DecimalValues = DecimalValues;
    setSolutionDataObject(dataobj);
  }


    return(
        <>
        <div className="row">
                <div className="col-lg-12 col-12 multitabs">
                    <ul className="nav nav-tabs tabsinfo" role="tablist">
                        <li className="nav-item tab">
                            <a className={`nav-link ${showcode == false ? "active" : " "}`} id="getsolution" data-toggle="tab" href="#tabs-41" role="tab">Get Solution </a>
                        </li>
                        {showcode == true ? <li className="nav-item tab">
                            <a className={`nav-link ${showcode == true ? "active" : " "}`} data-toggle="tab" href="#tabs-42" role="tab" >Solution</a>
                        </li> : null}
                        <li className="nav-item tab">
                            <a className="nav-link" data-toggle="tab" href="#tabs-43" role="tab">Theory</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane ${showcode == false ? "active" : " "}`} id="tabs-41" role="tabpanel">
                            <X2_Score_GetSolution sendtoparent={sendtochild} getSolutionData={getSolutionData} />
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-42" role="tabpanel">
                            <X2_Score_Solution getSolutionDataObject={getSolutionDataObject} />
                        </div> : null}
                        <div className="tab-pane" id="tabs-43" role="tabpanel">
                            <X2_Score_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default X2_Score;