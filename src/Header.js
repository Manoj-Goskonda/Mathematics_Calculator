import React from 'react'

export const Header = () => {
    return (
        <>
            <div className="heading">
                <div className="container fluid">
                    <div className="row" >
                        <div className="col-lg-12">
                            <h1>Critical Value</h1>
                            <h4>Help</h4>
                            <p>To determine critical values, you need to know the distribution of your test
                                statistic under the assumption that the null hypothesis holds. Critical values
                                are then the points on the distribution which have the same probability as
                                your test statistic, equal to the significance level α. These values are assumed
                                to be at least as extreme at those critical values.</p>

                            <br></br>
                            <br></br>
                            <br></br>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container fluid">
                <div className="row" >
                    <div className="col-lg-12 multitabs">
                        <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} class="nav nav-tabs  " id="myTab" role="tablist">
                            <li class="nav-item tab">
                                <a class="nav-link active" id="student-tab" data-toggle="tab" href="#student" role="tab" aria-controls="student" aria-selected="true">Student’s t</a>
                            </li>
                            <li class="nav-item tab">
                                <a class="nav-link" id="z-tab" data-toggle="tab" href="#z" role="tab" aria-controls="z" aria-selected="false">Z (Standard Normal)</a>
                            </li>
                            <li class="nav-item tab">
                                <a class="nav-link" id="x2-tab" data-toggle="tab" href="#x2" role="tab" aria-controls="x2" aria-selected="false">χ2 (chi-Square)</a>
                            </li>
                            <li class="nav-item tab">
                                <a class="nav-link" id="f-tab" data-toggle="tab" href="#f" role="tab" aria-controls="f" aria-selected="false">F (Fisher-Snedecor)</a>
                            </li>
                            <li class="nav-item tab">
                                <a class="nav-link" id="p-tab" data-toggle="tab" href="#p" role="tab" aria-controls="p" aria-selected="false">ρ (corr) </a>
                            </li>


                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">...</div>
                            <div class="tab-pane fade" id="z" role="tabpanel" aria-labelledby="z-tab">
                                <div className="row" >
                                    <div className="col-lg-6 multitabs">
                                        <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-arround' }} class="nav nav-tabs  " id="myTab" role="tablist">
                                            <li class="nav-item tab2">
                                                <a class="nav-link active" id="get-solution-tab" data-toggle="tab" href="#get-solution" role="tab" aria-controls="get-solution" aria-selected="true">Get Solution</a>
                                            </li>
                                            <li class="nav-item tab2">
                                                <a class="nav-link" id="theory-tab" data-toggle="tab" href="#theory" role="tab" aria-controls="theory" aria-selected="false">Theory</a>
                                            </li>



                                        </ul>
                                        <div class="tab-content" id="myTabContent">



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
