import React from 'react';
import Graph13 from '../assets/Images/formula.png';
import Graph7 from '../assets/Images/graph7.png';


const Standard_Theory = () =>{
    return(
        <>
        <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <h4>What is a Z-test?</h4>
                                        <p>A one sample Z-test is one of the most popular location tests. The null
                                            hypothesis is that the population mean value is equal to a given number, μ₀:</p>

                                        <p> H₀: μ = μ₀</p>

                                        <p>We perform a two-tailed Z-test if we want to test whether the population
                                            mean is not μ₀:</p>

                                        <p>H₁: μ ≠ μ₀,</p>

                                        <p>and a one-tailed Z-test if we want to test whether the population mean is
                                            less/greater than μ₀:</p>

                                        {/* <p>H₁: μ <  '(left-tailed test)''; and</p> */}

                                        {/* H₁: μ > μ₀ (right-tailed test). */}

                                        <p>Let us now discuss the assumptions of a one-sample Z-test.</p>
                                        <h4 className="mt-2"></h4>
                                        <p>Let x1, ..., xn be an independent sample following the normal distribution
                                            N(μ, σ²), i.e., with a mean equal to μ, and variance equal to σ².</p>
                                        <h5 className="theory_question">Z-test formula :</h5>
                                        <p>Let x1, ..., xn be an independent sample following the normal distribution
                                            N(μ, σ²), i.e., with a mean equal to μ, and variance equal to σ².</p>
                                        <div class="steps_theory">
                                            <p>We pose the null hypothesis, H₀: μ = μ₀<br></br>
                                                We define the test statistic, Z, as:<br></br>
                                                Z = (x̄ - μ0) /  (σ/ √n)</p>

                                        </div>
                                        <p className="ml-5">where :</p>
                                        <li className="theory_list">x̄ is the sample mean, i.e., x̄ = (x1 + ... + xn) / n;
                                            μ0 is the mean postulated in H₀;</li>
                                        <li className="theory_list">n is sample size; and</li>
                                        <li className="theory_list">σ is population standard deviation.</li>
                                        <li className="theory_list">In what follows, the uppercase Z stands for the test statistic (treated
                                            as a random variable), while the lowercase z will denote an actual
                                            value of Z, computed for a given sample drawn from N(μ,σ²).</li>
                                        <li className="theory_list">
                                            If H₀ holds, then the sum Sn = x1 + ... + xn follows the normal
                                            distribution, with mean n * μ0 and variance n² * σ. As Z is the
                                            standardization (z-score) of Sn/n, we can conclude that the test
                                            statistic Z follows the standard normal distribution N(0,1), provided
                                            that H₀ is true.</li>
                                        <h5 class="theory_question">Z-test critical values & critical regions :</h5>
                                        <p className="ml-3">The critical value approach involves comparing the value of the test statistic
                                            obtained for our sample, z, to the so-called critical values. These values
                                            constitute the boundaries of regions where the test statistic is highly
                                            improbable to lie. Those regions are often referred to as the critical regions,
                                            or rejection regions. The decision of whether or not you should reject the
                                            null hypothesis is then based on whether or not our z belongs to the critical
                                            region.</p>

                                        <p className="ml-3 mt-3">The critical regions depend on a significance level, &alpha, of the test, and
                                            on the alternative hypothesis. The choice of α is arbitrary; in practice, the
                                            values of 0.1, 0.05, or 0.01 are most commonly used as α. </p>
                                        <p className="ml-3 mt-3">Once we agree on the value of α, we can easily determine the critical
                                            regions of the Z-test :</p>
                                        <div className="ml-5 mt-3">
                                            <p>1.	Two-tailed Z-test: (-∞, Φ-1(α/2)] ∪ [Φ-1(1 - α/2), ∞)</p>
                                            <p>  2.	Left-tailed Z-test: (-∞, Φ-1(α)]</p>
                                            <p>3.	Right-tailed Z-test: [Φ-1(1 - α), ∞)</p>
                                        </div>
                                        <p>To decide the fate of H₀, check whether or not your z falls in the critical
                                            region:</p>
                                        <li className="theory_list">If yes, then reject H₀ and accept H₁; and</li>
                                        <li className="theory_list">If no, then there is not enough evidence to reject H₀.
                                        </li>
                                        <p>As you see, the formulae for the critical values of Z-tests involve the inverse,
                                            Φ⁻¹, of the cumulative distribution function (cdf) of N(0,1).
                                        </p>
                                        <h5 class="theory_question">Critical Value of Z :</h5>
                                        <p className="mt-2">The critical value of z is term linked to the area under the standard normal
                                            model. Critical values can tell you what probability any particular variable
                                            will have</p>
                                        <h5 class="theory_question mt-2">When are Critical values of z used?</h5>
                                        <p className="mt-2">The critical value of z is term linked to the area under the standard normal
                                            model. Critical values can tell you what probability any particular variable
                                            will have</p>
                                        <p>A critical value of z (Z-score) is used when the sampling distribution is
                                            normal, or close to normal. Z-scores are used when the population standard
                                            deviation is known or when you have larger sample sizes. While the z-score
                                            can also be used to calculate probability for unknown standard deviations
                                            and small samples, many statisticians prefer to use the t distribution to
                                            calculate these probabilities.</p>
                                        <h5 class="theory_question mt-2">Other uses of z-scores :</h5>
                                        <p className="mt-2">Every statistic has a probability, and every probability calculated for a
                                            sample has a margin of error. The critical value of z can also be used to
                                            calculate the margin of error.</p>
                                        <p className="mt-3">Margin of error = Critical value * Standard deviation of the Population
                                        </p>
                                        <div className="formula">
                                        <img className="formulacritical" src={Graph13} />
                                            <p>Where,</p>
                                            <p> MOEγ=margin of error</p>
                                            <p> γ = confidence level</p>
                                            <p> zγ = quantile</p>
                                            <p>σ = standard deviation</p>
                                            <p> n = sample size</p>
                                        </div>
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

export default Standard_Theory;