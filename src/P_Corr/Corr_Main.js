import React,{useState} from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Corr_GetSolution from './Corr_GetSolution';
import Corr_Solution from './Corr_Solution';
import Corr_Theory from './Corr_Theory';

const Corr_Main = () =>{
    const[showcode,setshowcode]=useState(false)

const sendtoparent =(index)=>{
    setshowcode(index)
}

    return(
        <>
        <br></br>
            <br></br>
            <div className="container fluid">
                <div className="row" >
                    <div className="col-lg-12 col-12 multitabs" >
                        <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} className="nav nav-tabs  " id="myTab" role="tablist">
                            <li className="nav-item tab">
                                <a className="nav-link" id="student-tab" data-toggle="tab" href="#student" role="tab" aria-controls="student" aria-selected="true">Student’s t</a>
                            </li>
                            <li className="nav-item tab">
                                <a className="nav-link" id="z-tab" data-toggle="tab" href="#z" role="tab" aria-controls="z" aria-selected="false">Z (Standard Normal)</a>
                            </li>
                            <li className="nav-item tab">
                                <a className="nav-link" id="x2-tab" data-toggle="tab" href="#x2" role="tab" aria-controls="x2" aria-selected="false">χ2 (chi-Square)</a>
                            </li>
                            <li className="nav-item tab">
                                <a className="nav-link" id="f-tab" data-toggle="tab" href="#f" role="tab" aria-controls="f" aria-selected="false">F (Fisher-Snedecor)</a>
                            </li>
                            <li className="nav-item tab">
                                <a className="nav-link" id="p-tab" data-toggle="tab" href="#p" role="tab" aria-controls="p" aria-selected="false">ρ (corr) </a>
                            </li>
                        </ul>
                        <br></br>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">
                                <div className="row" >
                                    <div classNameName="col-lg-12 col-12 multitabs">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item tab">
                                                <a className={`nav-link ${showcode == false ? "active" : " "}`} id="getsolution" data-toggle="tab" href="#tabs-2" role="tab">Get Solution </a>
                                            </li>
                                            {showcode == true ? <li className="nav-item tab">
                                                <a className= {`nav-link ${showcode == true ? "active" : " "}`}  data-toggle="tab" href="#tabs-3" role="tab" >Solution</a>
                                            </li> : null } 
                                            <li className="nav-item tab">
                                                <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Theory</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className={`tab-pane ${showcode == false ? "active" : " "}`} id="tabs-2" role="tabpanel">
                                                <Corr_GetSolution sendtoparent={sendtoparent}/>
                                            </div>
                                             { showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-3" role="tabpanel">
                                                <Corr_Solution />
                                            </div>: null }
                                            <div className="tab-pane" id="tabs-4" role="tabpanel">
                                                <Corr_Theory />
                                            </div>
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
export default Corr_Main;