import React from "react";
import { NavLink } from "react-router-dom";
export const CriticalValue = () => {
  return (
    <>
      {/* <CriticalValue /> */}
      <div className="heading footer_bg1">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item ">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item home_breadcumb">
                    <a href="#">Critical Value</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    P value
                  </li>
                </ol>
              </nav>

              <div className="critical_help">
                <h1 className="m-3">Critical Value</h1>
                <a className="critical_a" href="">
                  Help
                </a>
              </div>
              <p className="m-3">
                To determine critical values, you need to know the distribution
                of your test statistic under the assumption that the null
                hypothesis holds. Critical values are then the points on the
                distribution which have the same probability as your test
                statistic, equal to the significance level α. These values are
                assumed to be at least as extreme at those critical values.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriticalValue;
