import React from 'react'
import Fisher from '../assets/Images/fisherformula.png';
const Fisher_Theory = () =>{
    return(
        <>
         <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <p>Finally, choose F (Fisher-Snedecor) if your test statistic follows the
                                            F-distribution. This distribution has a pair of degrees of freedom.</p>
                                        <p>
                                            Let us see how those degrees of freedom arise. Assume that you have two
                                            independent random variables, X and Y, that follow χ²-distributions with d1
                                            and d2 degrees of freedom, respectively. If you now consider the ratio
                                            (X/d1)/(Y/d2), it turns out it follows the F-distribution with (d1, d2) degrees
                                            of freedom. That's the reason why we call d1 and d2 the numerator and
                                            denominator degrees of freedom, respectively.</p>
                                        <p>In the formula below, QF,d1,d2 stands for the quantile function of the
                                            F-distribution with (d1, d2)degrees of freedom:</p>
                                        <div className="fisherimg">
                                            <img className="fish" src={Fisher} />
                                            <p>1.	Left-tailed F critical value: QF,d1,d2(α)</p>
                                            <p> 2.	Right-tailed F critical value: QF,d1,d2(1 - α)</p>
                                            <p>3.	Two-tailed F critical values:</p>

                                            <p className="mt-3">QF, d1, d2(α/2) and QF, d1, d2(1 - α/2)</p>
                                        </div>
                                        <p>Here we list the most important tests that produce F-scores: each of them is
                                            right-tailed.</p>
                                        <li className="theory_list mt-3">NOVA: tests the equality of means in three or more groups that come
                                            from normally distributed populations with equal variances. There are
                                            (k - 1, n - k) degrees of freedom, where k is the number of groups, and
                                            n is the total sample size (across every group).</li>
                                            <li className="theory_list mt-3">Overall significance in regression analysis. The test statistic has
                                            (k - 1, n - k) degrees of freedom, where n is the sample size, and k is
                                            the number of variables (including the intercept).</li>
                                            <li className="theory_list mt-3">Compare two nested regression models. The test statistic follows the
                                            F-distribution with (k2 - k1, n - k2) degrees of freedom, where k1 and
                                            k2 are the number of variables in the smaller and bigger models,
                                            respectively, and n is the sample size.</li>
                                            <li className="theory_list mt-3">The equality of variances in two normally distributed populations.
                                            There are (n - 1, m - 1) degrees of freedom, where n and m are the
                                            respective sample sizes.</li>
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
export default Fisher_Theory;