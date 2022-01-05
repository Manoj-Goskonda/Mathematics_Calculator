import React,{useState} from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Fisher_GetSolution from './Fisher_GetSolution';
import Fisher_Solution from './Fisher_Solution';
import Fisher_Theory from './Fisher_Theory';

const Fisher_Snedecor_Main = () =>{
    
    const[showcode,setshowcode]=useState(false)
    
    const sendtoparent =(index)=>{
        setshowcode(index)
    }  
    
    return(
        <>
        <div className="row">
                <div className="col-lg-12 col-12 multitabs">
                    <ul className="nav nav-tabs tabsinfo" style={{marginLeft: "20%"}} role="tablist">
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
                            <Fisher_GetSolution sendtoparent={sendtoparent} />
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-32" role="tabpanel">
                            <Fisher_Solution />
                        </div> : null}
                        <div className="tab-pane" id="tabs-33" role="tabpanel">
                            <Fisher_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fisher_Snedecor_Main;