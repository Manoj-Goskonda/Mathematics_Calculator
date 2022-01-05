import React,{useState} from 'react';
import pcorr from '../assets/Images/pcorrformula.png'
import Z_Score_GetSolution from './Z_Score_GetSolution';
import Z_Score_Solution from './Z_Score_Solution';
import Z_Score_Theory from './Z_Score_Theory';


const Z_Score = () =>{
    const[showcode,setshowcode]=useState(false)

const sendtochild =(index)=>{
    setshowcode(index)
}

    const [getSolutionDataObject,setSolutionDataObject] = useState({});

    const getSolutionData = (tailed, numSign, DecimalValues) =>{
    console.log("inside Parent ===============>",tailed, numSign, DecimalValues);
    let dataobj = {};
    dataobj.tailed = tailed;
    dataobj.numSign = numSign;
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
                            <Z_Score_GetSolution sendtoparent={sendtochild} getSolutionData={getSolutionData} />
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-42" role="tabpanel">
                            <Z_Score_Solution getSolutionDataObject={getSolutionDataObject} />
                        </div> : null}
                        <div className="tab-pane" id="tabs-43" role="tabpanel">
                            <Z_Score_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Z_Score;