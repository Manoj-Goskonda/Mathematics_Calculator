import React from 'react';
import Graph1 from '../assets/Images/graph1.png';
import Graph2 from '../assets/Images/graph2.png';
import Graph3 from '../assets/Images/graph3.png';
import Graph4 from '../assets/Images/graph4.png';
import Graph5 from '../assets/Images/graph5.png';
import Graph6 from '../assets/Images/graph6.png';

import { NavLink } from 'react-router-dom';

export const Distributions = () => {
    return (
             <>
            <div className="heading">
                <div className="container fluid">
                    <div className="row" >
                        <div className="col-lg-12">
                            {/* <h1 class="criticalValue_heading">Distribution</h1> */}<br></br>
                            <br></br>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/binomial">
                                    <div className="graph">
                                        <img className="Graph1" src={Graph1} />
                                        <hr className="image-line"></hr>
                                        <div className="graph-text">
                                            <h5>Binomial Distribution</h5>
                                            <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                            </svg></p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="col-sm-4">
                                <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/poisson">
                                    <div className="graph">
                                        <img className="Graph1" src={Graph2} />
                                        <hr className="image-line"></hr>
                                        <div className="graph-text">
                                            <h5>Poisson Distribution</h5>
                                            <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                            </svg></p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="col-sm-4">
                                <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/normal">
                                    <div className="graph">
                                        <img className="Graph1" src={Graph3} />
                                        <hr className="image-line"></hr>
                                        <div className="graph-text">
                                            <h5>Normal Distribution</h5>
                                            <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                            </svg></p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-sm-4">
                                <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/uniform">
                                <div className="graph">
                                    <img className="Graph1" src={Graph4} />
                                    <hr className="image-line"></hr>
                                    <div className="graph-text">
                                        <h5>Uniform Distribution</h5>
                                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                        </svg></p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="col-sm-4">
                                <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/geometric">
                                <div className="graph">
                                    <img className="Graph1" src={Graph4} />
                                    <hr className="image-line"></hr>
                                    <div className="graph-text">
                                        <h5>Geometric Distribution</h5>
                                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                        </svg></p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="col-sm-4">
                            <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/negative">
                                <div className="graph">
                                    <img className="Graph1" src={Graph5} />
                                    <hr className="image-line"></hr>
                                    <div className="graph-text">
                                        <h5>Negative Binomial
                                            Distribution</h5>
                                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                        </svg></p>
                                      </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="col-sm-4">
                            <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/hypergeometric">
                                <div className="graph">
                                    <img className="Graph1" src={Graph6} />
                                    <hr className="image-line"></hr>
                                    <div className="graph-text">
                                        <h5>Hypergeometric
                                            Distribution</h5>
                                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                        </svg></p>
                                    </div>
                                </div>
                            </NavLink>
                            </div>
                            <div class="col-sm-4">
                            <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/weibull">
                                <div className="graph">
                                    <img className="Graph1" src={Graph4} />
                                    <hr className="image-line"></hr>
                                    <div className="graph-text">
                                        <h5>Weibull Distribution</h5>
                                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                        </svg></p>
                                    </div>
                                </div>
                            </NavLink>
                            </div>
                            <div class="col-sm-4">
                            <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/lognormal">
                                <div className="graph">
                                    <img className="Graph1" src={Graph5} />
                                    <hr className="image-line"></hr>
                                    <div className="graph-text">
                                        <h5>Lognormal Distribution</h5>
                                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                        </svg></p>
                                    </div>
                                </div>
                            </NavLink>
                            </div>
                            <div class="col-sm-4">
                            <NavLink className="main-nav" activeClassName="main-nav-active" aria-current="page" to="/gamma">
                                <div className="graph">
                                    <img className="Graph1" src={Graph6} />
                                    <hr className="image-line"></hr>
                                    <div className="graph-text">
                                        <h5>Gamma Distribution</h5>
                                        <p><svg width="30" height="30" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#C4C4C4" />
                                        </svg></p>
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Distributions;
