import React from 'react';
import pcarr from '../assets/Images/pcorrformula.png';

const Corr_Theory = () =>{
    return(
        <>
        <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <p>In statistics, Spearman's rank correlation coefficient or Spearman's ρ,
                                            named after Charles Spearman and often denoted by the Greek letter (rho)
                                            as ρ or as rs , is a nonparametric measure of rank correlation (statistical
                                            dependence between the rankings of two variables).</p>
                                        <p>It assesses how well
                                            the relationship between two variables can be described using a monotonic
                                            function.</p>

                                        <p>For low values of rho, a table of critical values can be used (see Spearman’s 
                                             Rho Table). For higher values (generally about n {'>'} 10), Theorem 1 of
                                            Correlation Testing via t Test and Theorem 1 of Correlation Testing via
                                            Fisher Transformation is applied using Spearman’s rho in place of Pearson’s
                                            correlation r.</p>
                                        <h5 class="theory_question">Assumptions for Spearman’s Rank Correlation :</h5>
                                        <p>Your data must be ordinal, interval or ratio.</p>

                                        <p className="mt-3">In addition, because Spearman’s measures the strength of a monotonic
                                            relationship, your data has to be monotonically related. Basically, this means
                                            that if one variable increases (or decreases), the other variable also
                                            increases (or decreases).
                                        </p>
                                        <h5 class="theory_question mt-3">Test Results :</h5>
                                        <div className="fisherimg">
                                            <img className="fish1" src={pcarr} />
                                            <p className="mt-2">ρ  = spearman’s rank correlation coefficient</p>
                                            <p>di = difference between the two ranks of each observation</p>
                                            <p>n  = number of observations</p>

                                            <p className="mt-3">Spearman’s returns a value from -1 to 1, where:</p>
                                            <p>+1 = a perfect positive correlation between ranks</p>
                                            <p>-1 = a perfect negative correlation between ranks</p>
                                            <p>0 = no correlation between ranks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="last-heading mt-2">If you like the page, please share or like. Questions, comments and suggestions are
                        appreciated.</p>
                </div>
            </div>
        </>
    )
}

export default Corr_Theory;