import React from 'react'
import Negative1 from '../assets/Images/Negative1.png';
export const Lognormal_Theory = () => {
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
                                        <h4>What is Lognormal Distribution?</h4>
                                        <p style={{ fontWeight: 'bold' }}>In probability theory, a Log-normal (or lognormal) distribution is a
                                            continuous probability distribution of a random variable whose logarithm is
                                            normally distributed. Thus, if the random variable X is log-normally
                                            distributed, then Y = ln(X) has a normal distribution. Equivalently, if Y has a
                                            normal distribution, then the exponential function of Y, X = exp(Y), has a
                                            log-normal distribution. A random variable which is log-normally
                                            distributed takes only positive real values. It is a convenient and useful
                                            model for measurements in exact and engineering sciences, as well as
                                            medicine, economics and other topics.</p>
                                        <br></br>
                                        <p>A positive random variable X is log-normally distributed
                                            (i.e., X ~ Lognormal(µx,σ2x) if the natural logarithm of X is normally
                                            distributed with mean µ and variance σ2:
                                            ln(X) ~ N(µ , σ2)
                                        </p><br></br>
                                        <br></br>
                                        <div className="formula" style={{ fontSize: '18px' }}>
                                            <ul>
                                                <ol>fX(x)=(1/σx√2π)*e− (ln x−μ)2/2σ2     ;    x  ≥ 0</ol>
                                                <ol> =      0;    otherwise</ol>
                                            </ul>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <p>The lognormal distribution is used to describe load variables, whereas the
                                            normal distribution is used to describe resistance variables. However, a
                                            variable that is known as never taking on negative values is normally
                                            assigned a lognormal distribution rather than a normal distribution.</p>
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
export default Lognormal_Theory;