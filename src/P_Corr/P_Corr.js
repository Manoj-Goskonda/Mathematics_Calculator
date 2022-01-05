import React,{useState} from 'react';
import pcorr from '../assets/Images/pcorrformula.png'
import Corr_GetSolution from './Corr_GetSolution';
import Corr_Solution from './Corr_Solution';
import Corr_Theory from './Corr_Theory';

const P_Corr = () =>{
    const[showcode,setshowcode]=useState(false)

const sendtoparent =(index)=>{
    setshowcode(index)
}
    return(
        <>
        <div className="row">
                <div classNameName="col-lg-12 col-12 multitabs">
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
                            <Corr_GetSolution sendtoparent={sendtoparent} />
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-42" role="tabpanel">
                            <Corr_Solution />
                        </div> : null}
                        <div className="tab-pane" id="tabs-43" role="tabpanel">
                            <Corr_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default P_Corr;