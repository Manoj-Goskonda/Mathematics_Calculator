import React from "react";

export const Normal_Disc = () => {
  return (
    <>
      {/* <Distribution /> */}
      <div className="heading footer_bg1">
        <div className="container fluid">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item ">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item home_breadcumb">
                    <a href="#"></a>Distribution
                  </li>
                  <li class="breadcrumb-item home_breadcumb">
                    <a href="#"></a>Normal Distribution Calculator
                  </li>
                </ol>
              </nav>
              <div className="critical_help">
                <h1 className="m-3">Distributions</h1>
                <a className="critical_a" href="">
                  Help
                </a>
              </div>
              <p className="m-3">
                In probability theory and statistics, a probability distribution
                is the mathematical function that gives the probabilities of
                occurrence of different possible outcomes for an experiment. It
                is a mathematical description of a random phenomenon in terms of
                its sample space and the probabilities of events.
              </p>
              <br></br>
              <div className="col-lg-12 subcalheading d-flex">
                <h1 className="" style={{ fontWeight: "bold" }}>
                  Normal Distribution Calculator
                </h1>
                {/* <svg
                  width="30"
                  height="30"
                  viewBox="0 0 39 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z"
                    fill="#C4C4C4"
                  />
                </svg> */}
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Normal_Disc;
