import React, { useState } from "react";
import Standard_GetSolution from "./Standard_GetSolution";
import Standard_Solution from "./Standard_Solution";
import Standard_Theory from "./Standard_Theory";

const Std_Normal = () => {
  const [showcode, setshowcode] = useState(false);

  const sendtoparent = (index) => {
    setshowcode(index);
  };

  const [getSolutionDataObject,setSolutionDataObject] = useState({});

  const getSolutionData = (tailed, numSign, DecimalValues) =>{
    console.log("inside Parent ===============>",tailed, numSign, DecimalValues);
    let dataobj = {};
    dataobj.tailed = tailed;
    dataobj.numSign = numSign;
    dataobj.DecimalValues = DecimalValues;
    setSolutionDataObject(dataobj);
  }

  return (
    <>
      <div className="row">
        <div classNameName="col-lg-12 col-12 multitabs">
          <ul className="nav nav-tabs tabsinfo" role="tablist">
            <li className="nav-item tab">
              <a
                className={`nav-link ${showcode == false ? "active" : " "}`}
                id="getsolution"
                data-toggle="tab"
                href="#tabs-2"
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
                  href="#tabs-3"
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
                href="#tabs-4"
                role="tab"
              >
                Theory
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className={`tab-pane ${showcode == false ? "active" : " "}`}
              id="tabs-2"
              role="tabpanel"
            >
              <Standard_GetSolution sendtoparent={sendtoparent} getSolutionData={getSolutionData} />
            </div>
            {showcode == true ? (
              <div
                className={`tab-pane ${showcode == true ? "active" : " "}`}
                id="tabs-3"
                role="tabpanel"
              >
                <Standard_Solution getSolutionDataObject={getSolutionDataObject} />
              </div>
            ) : null}
            <div className="tab-pane" id="tabs-4" role="tabpanel">
              <Standard_Theory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Std_Normal;
