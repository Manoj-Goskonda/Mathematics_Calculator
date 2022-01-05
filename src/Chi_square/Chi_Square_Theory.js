import React from 'react'
import Graph7 from '../assets/Images/graph7.png';

const Chi_Square_Theory = () =>{
    return(
        <>
        <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <p>Use the χ² (chi-square) option when performing a test in which the test
                                            statistic follows the χ²-distribution. You need to determine the number of
                                            degrees of freedom of the χ²-distribution of your test statistic - below we
                                            list them for the most commonly used χ²-tests.</p>
                                        <p className="mt-3">A chi-square statistic is a measure of the difference between the observed
                                            and expected frequencies of the outcomes of a set of events of variables.</p>
                                        <h4 className="mt-2">What is the T Distribution?</h4>
                                        <p>The formula for chi-square is, image</p>
                                        <div className="x2theory">
                                            <p>χ²  =   chi-squared</p>
                                            <p>Oi =   observed value</p>
                                            <p>Ei  =  expected value</p>
                                        </div>
                                        <p>Here we give the formulae for chi square critical values; Qχ²,d is the
                                            quantile function of the χ²-distribution with d degrees of freedom:</p>
                                        <div className="mt-3">
                                            <p>1.Left-tailed χ² critical value: Qχ²,d(α)</p>
                                            <p>2.	Right-tailed χ² critical value: Qχ²,d(1 - α)</p>
                                            <p>3.	Two-tailed χ² critical values: Qχ²,d(α/2) and Qχ²,d(1 - α/2)</p>
                                        </div>
                                        <h5 className="theory_question mt-2">Several different tests lead to a χ²-score :</h5>
                                        <li className="theory_list mt-3">Goodness-of-fit test: does the empirical distribution agree with the
                                            expected distribution?</li>

                                        <li className="theory_list mt-3">This test is right-tailed. Its test statistic follows the χ²-distribution with
                                            k - 1 degrees of freedom, where k is the number of classes into which the
                                            sample is divided.</li>

                                        <li className="theory_list mt-3">Independence test: is there a statistically significant relationship between
                                            two variables?</li>

                                        <li className="theory_list mt-3">This test is also right-tailed, and its test statistic is computed from the
                                            contingency table. There are (r - 1)(c - 1) degrees of freedom, where r is
                                            the number of rows, and c the number of columns in the contingency
                                            table.</li>

                                        <li className="theory_list mt-3">Test for the variance of normally distributed data: does this variance have
                                            some pre-determined value?</li>

                                        <li className="theory_list mt-3">This test can be one- or two-tailed! Its test statistic has the χ²-distribution
                                            with n - 1 degrees of freedom, where n is the sample size</li>

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

export default Chi_Square_Theory;