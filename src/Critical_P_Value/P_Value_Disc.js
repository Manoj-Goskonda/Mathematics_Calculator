import React from "react";

const P_Value_Disc = () => {
  return (
    <>
      <div className="heading footer_bg1">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item ">
                    <a href="/critical">Home</a>
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
                <h1 className="m-3">P Value</h1>
                <a className="critical_a" href="">
                  Help
                </a>
              </div>
              <p className="m-3">
                Formally, the p-value is the probability that the test statistic
                will produce values at least as extreme as the value it produced
                for your sample. It is crucial to remember that this probability
                is calculated under the assumption that the null hypothesis is
                true!
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default P_Value_Disc;
