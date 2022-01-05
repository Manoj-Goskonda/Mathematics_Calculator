import React, { useState } from "react";
import pcarr from "../assets/Images/pcorrformula.png";
import Getsolution from "./Student_GetSolution";
import Solution from "./Solution";
import Theory from "./Theory";
import Student_GetSolution from "./Student_GetSolution";

export const Student = () => {
  const [showcode, setshowcode] = useState(false);

     const sendtoparent = (index) => {
     setshowcode(index);  
    }
    
    const [getSolutionDataObject,setSolutionDataObject] = useState({});

  const getSolutionData = (tailed, LeftTailed,RightTailed,TwoTailed,numDof, numSign, numSample, DecimalValues) =>{
    console.log("inside Parent ===============>",tailed,LeftTailed,RightTailed,TwoTailed, numDof, numSign, numSample, DecimalValues);
    let dataobj = {};
    dataobj.tailed = tailed;
    dataobj.LeftTailed = LeftTailed;
    dataobj.RightTailed = RightTailed;
    dataobj.TwoTailed = TwoTailed;
    dataobj.numDof = numDof;
    dataobj.numSign = numSign;
    dataobj.numSample = numSample;
    dataobj.DecimalValues = DecimalValues;
    setSolutionDataObject(dataobj);
  }
 
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-12 multitabs">
          <ul className="nav nav-tabs tabsinfo" role="tablist">
            <li className="nav-item tab">
              <a
                className={`nav-link ${showcode == false ? "active" : " "}`}
                id="getsolution"
                data-toggle="tab"
                href="#tabs-20"
                role="tab"
              >
                Get Solution
              </a>
            </li>
            {showcode == true ? (
              <li className="nav-item tab">
                <a
                  className={`nav-link ${showcode == true ? "active" : " "}`}
                  data-toggle="tab"
                  href="#tabs-21"
                  role="tab"
                >
                  Solution
                </a>
              </li>
            ) : null}
            <li className="nav-item tab">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#tabs-22"
                role="tab"
              >
                Theory
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className={`tab-pane ${showcode == false ? "active" : " "}`}
              id="tabs-20"
              role="tabpanel"
            >
              <Student_GetSolution sendtoparent={sendtoparent} getSolutionData={getSolutionData} />
            </div>
            {showcode == true ? (
              <div
                className={`tab-pane ${showcode == true ? "active" : " "}`}
                id="tabs-21"
                role="tabpanel"
              >
                <Solution getSolutionDataObject={getSolutionDataObject} />
              </div>
            ) : null}
            <div className="tab-pane" id="tabs-22" role="tabpanel">
              <Theory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Student;
