import React,{useState} from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import X2_Score_GetSolution from './X2_Score_GetSolution';
import X2_Score_Solution from './X2_Score_Solution';
import X2_Score_Theory from './X2_Score_Theory';

const X2_Score_Main = () =>{
    
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
                        <ul style={{ width: '100%', display: 'flex'}} className="nav nav-tabs  " id="myTab" role="tablist">
                            <li className="nav-item tab">
                                <a className="nav-link" id="student-tab" data-toggle="tab" href="#student" role="tab" aria-controls="student" aria-selected="true">T Score</a>
                            </li>
                            <li className="nav-item tab">
                                <a className="nav-link" id="z-tab" data-toggle="tab" href="#z" role="tab" aria-controls="z" aria-selected="false">Z Score</a>
                            </li>
                            <li className="nav-item tab">
                                <a className="nav-link" id="x2-tab" data-toggle="tab" href="#x2" role="tab" aria-controls="x2" aria-selected="false">χ2 Score</a>
                            </li>
                            <li className="nav-item tab">
                                <a className="nav-link" id="f-tab" data-toggle="tab" href="#f" role="tab" aria-controls="f" aria-selected="false">F Score</a>
                            </li>
                        </ul>
                        <br></br>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">
                                <div className="row" >
                                    <div className="col-lg-12 col-12 multitabs">
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
                                                <X2_Score_GetSolution sendtoparent={sendtoparent}/>
                                            </div>
                                             { showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-3" role="tabpanel">
                                                <X2_Score_Solution />
                                            </div>: null }
                                            <div className="tab-pane" id="tabs-4" role="tabpanel">
                                                <X2_Score_Theory />
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
export default X2_Score_Main;