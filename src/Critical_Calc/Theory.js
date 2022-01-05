import React from 'react'
import Graph7 from '../assets/Images/graph7.png';

const Theory = () =>{
    return(
        <>
        <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <h4>Critical value</h4>
                                        <p>In a test of hypothesis, a test statistic is employed to decide whether to
                                            reject the null hypothesis or not. If the test statistic falls within a range of
                                            values called acceptance region, then the null hypothesis is not rejected.
                                            The boundaries of the acceptance region, that is, the most extreme values
                                            for which the null is not rejected, are called critical values.</p>
                                        <p className="mt-3">Student’s t-test, in statistics, a method of testing hypotheses about the
                                            mean of a small sample drawn from a normally distributed population
                                            when the population standard deviation is unknown.</p>
                                        <h4 className="mt-2">What is the T Distribution?</h4>
                                        <p>The T distribution (also called Student’s T Distribution) is a family of
                                            distributions that look almost identical to the normal distribution curve,
                                            only a bit shorter and fatter. The t distribution is used instead of the
                                            normal distribution when you have small samples (for more on this, see:
                                            t-score vs. z-score). The larger the sample size, the more the t distribution
                                            looks like the normal distribution. In fact, for sample sizes larger than 20
                                            (e.g. more degrees of freedom), the distribution is almost exactly like the
                                            normal distribution.</p>
                                        <h5 className="theory_question">How to Calculate the Score for a T Distribution :</h5>
                                        <p>When you look at the t-distribution tables, you’ll see that you need to know
                                            the “df.” This means “degrees of freedom” and is just the sample size minus
                                            one.</p>
                                        <div class="steps_theory">
                                            <p>Step 1: Subtract one from your sample size. This will be your degrees
                                                of freedom.<br></br>

                                                Step 2: Look up the df in the left hand side of the t-distribution table.
                                                Locate the column under your alpha level
                                            </p>
                                        </div>
                                        <p className="mt-3">Critical values can be conveniently depicted as the points with the
                                            property that the area under the density curve of the test statistic from
                                            those points to the tails is equal to α:</p>
                                        <li className="theory_list">
                                            left-tailed test: the area under the density curve from the critical
                                            value to the left is equal to α;</li>
                                        <li className="theory_list">right-tailed test: the area under the density curve from the critical
                                            value to the right is equal to α; and
                                            two-tailed test: the area under the density curve from the left</li>
                                        <li className="theory_list">critical value to the left is equal to α/2 and the area under the
                                            curve from the right critical value to the right is equal to α/2 as
                                            well; thus, total area equals α.</li>
                                        <h5 class="theory_question">t critical values</h5>
                                        <p>Use the t-Student option if your test statistic follows the t-Student
                                            distribution. This distribution is similar to N(0,1), but its tails are fatter - the
                                            exact shape depends on the number of degrees of freedom. If this number
                                            is large (30), which generically happens for large samples, then the
                                            t-Student distribution is practically indistinguishable from N(0,1).</p>
                                        <div class="theory-graph">
                                            <img className="theory-graph-img" src={Graph7} />
                                            <p className="text-center">Density of the t-distribution with ν degrees of freedom</p>
                                        </div>
                                        <p className="mt-3">In the formulae below, Qt,d is the quantile function of the t-Student
                                            distribution with d degrees of freedom:</p>
                                        <p className="ml-4">
                                            1.	left-tailed t critical value: Qt,d(α)<br></br>
                                            2.	right-tailed t critical value: Qt,d(1 - α)<br></br>
                                            3.	two-tailed t critical values: ±Qt,d(1 - α/2)<br></br>
                                        </p>
                                        <h5 class="theory_question">t critical values</h5>
                                        <p>Recall, that in the critical values approach to hypothesis testing, you need
                                            to set a significance level, α, before computing the critical values, which in
                                            turn give rise to critical regions (a.k.a. rejection regions).</p>
                                        <p>Formulas for critical values employ the quantile function of t-distribution,
                                            i.e., the inverse of the cdf:</p>
                                        <p className="ml-4">1.	Critical value for left-tailed t-test: cdft, d-1(α)
                                            <p className="ml-4"> critical region:</p>
                                            <p className="ml-4">  (-∞, cdft,d-1(α)]</p>
                                            2.	Critical value for right-tailed t-test: cdft,d-1(1-α)<br></br>
                                            <p className="ml-4">critical region:</p>
                                            <p className="ml-4">[cdft,d-1(1-α), ∞)</p>
                                            3.	Critical values for two-tailed t-test: ±cdft,d-1(1-α/2)<br></br>
                                            <p className="ml-4">critical region:</p>
                                            <p className="ml-4">(-∞, -cdft,d-1(1-α/2)] ∪ [cdft,d-1(1-α/2), ∞)</p>
                                        </p>
                                        <p>To decide the fate of the null hypothesis, just check if your t-score lies
                                            within the critical region:</p>
                                        <li className="theory_list">If your t-score belongs to the critical region, reject the null
                                            hypothesis and accept the alternative hypothesis.
                                        </li>
                                        <li className="theory_list">If your t-score is outside the critical region, then you don't have
                                            enough evidence to reject the null hypothesis.</li>
                                        <p>If you like the page, please share or like. Questions, comments and suggestions are
                                            appreciated.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Theory;