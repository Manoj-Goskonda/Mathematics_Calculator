import React from 'react'
import Geometric1 from '../assets/Images/Geometric1.png';
import Geometric5 from '../assets/Images/Geometric5.png';
 const Geometric_Theory = () => {
    return (
        <>
        <br></br>
            <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <p style={{fontWeight:'bold'}}>A geometric distribution is defined as a discrete probability distribution 
                                            of a random variable “x” which satisfies some of the conditions. The geometric 
                                            distribution conditions are</p>
                                        <br></br>
                                        <div className="formula">
                                            <ul>
                                            <ol>• A phenomenon that has a series of trials</ol>
                                            <ol>• Each trial has only two possible outcomes – either success or failure</ol>
                                            <ol>• The probability of success is the same for each trial</ol>
                                            </ul>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <h5 className="theory_question">Geometric Distribution Formula :</h5>
                                        <p>In probability and statistics, geometric distribution defines the 
                                            probability that first success occurs after k number of trials. 
                                            If p is the probability of success or failure of each trial, then 
                                            the probability that success occurs on the kth trial is given by the formula</p>
                                            <img src={Geometric1} className="graph_img" style={{marginLeft:'30%'}} />
                                        <div className="formula">
                                            <ul>
                                            <ol>Where,</ol><br></br>
                                            <ol>• p = Probability of Success</ol>
                                            <ol>• k = Trial at which the first success occurs</ol>                                       
                                            </ul>
                                        </div>
                                            <br></br>
                                            <h5 className="theory_question">Assumptions for the Geometric Distribution :</h5>
                                            <p>The three assumptions are:</p>
                                        <div className="formula">
                                            <ul>
                                            <ol>• There are two possible outcomes for each trial (success or failure).</ol>
                                            <ol>• The trials are independent.</ol>
                                            <ol>• The probability of success is the same for each trial.</ol>                                       
                                            </ul>
                                        </div>
                                        <img src={Geometric5} className="graph_img" style={{marginLeft:'22%'}} />
                                        <br></br>
                                        <br></br>
                                        <p>The variance of a distribution measures how "spread out" the 
                                            data is. Related is the standard deviation--the square root of 
                                            the variance--useful due to being in the same units as the data.</p><br></br>
                                        <p>Three of these values--the mean, mode, and variance--are 
                                                generally calculable for a geometric distribution. 
                                                The median, however, is not generally determined.</p><br></br>
                                        <p>The easiest to calculate is the mode, as it is simply equal 
                                            to 0 in all cases, except for the trivial case p=0 in which 
                                            every value is a mode. This is due to the fact that p>(1-p)^k when p>0.</p><br></br>
                                        <p>The mean is somewhat more difficult to calculate, but it is reasonably intuitive:</p><br></br>
                                        <p>The mean of a geometric distribution with parameter p is 1-p/p or 1/p -1.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="last-heading">If you like the page, please share or like. Questions, comments and suggestions are
                    appreciated.</p>
            </div>
        </>

    )
}
export default Geometric_Theory;
