import React from "react";
import Z_Score from "../Z_Score/Z_Score";
import X2_Score from "../X2 Score/X2_Score";
import T_Score from "../T_Score/T_Score";
import F_Score from "../F Score/F_Score";

const T_Score_Main = () => {
  return (
    <>
      <br></br>
      <br></br>
      <div className="container fluid">
        <div className="row ">
          <div className="col-lg-12 col-12 multitabs">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item tab">
                <a
                  className="nav-link active"
                  id="getsolution"
                  data-toggle="tab"
                  href="#tabs-6"
                  role="tab"
                >
                  T Score
                </a>
              </li>
              <li className="nav-item tab">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-7"
                  role="tab"
                >
                  Z Score
                </a>
              </li>
              <li className="nav-item tab">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-8"
                  role="tab"
                >
                  χ2 Score
                </a>
              </li>
              <li className="nav-item tab">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tabs-9"
                  role="tab"
                >
                  F Score
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tabs-6"
                role="tabpane1"
              >
                <T_Score />
              </div>
              <div className="tab-pane" id="tabs-7" role="tabpanel">
                <Z_Score />
              </div>
              <div className="tab-pane" id="tabs-8" role="tabpanel">
                <X2_Score />
              </div>
              <div className="tab-pane" id="tabs-9" role="tabpanel">
                <F_Score />
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default T_Score_Main;
