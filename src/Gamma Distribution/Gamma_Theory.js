import React from 'react'
import Gamma1 from '../assets/Images/Gamma1.png';


export const Gamma_Theory = () => {
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
                                        <h4>Gamma Distribution Calculator</h4>
                                        <p style={{ fontWeight: 'bold' }}>In probability theory and statistics, the gamma distribution is a two-
                                            parameter family of continuous probability distributions. The exponential
                                            distribution, Erlang distribution, and chi-square distribution are special
                                            cases of the gamma distribution. There are two different parameterizations
                                            in common use:</p>
                                        <br></br>
                                        <br></br>
                                        <div className="formula" style={{ fontSize: '18px' }}>
                                            <ul>
                                                <ol>1. With a shape parameter k and a scale parameter θ.</ol>
                                                <ol>  2. With a shape parameter α = k and an inverse scale parameter β = 1/θ, called a rate parameter.</ol>
                                            </ul>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <p>In each of these forms, both parameters are positive real numbers.
                                            The gamma distribution can be parameterized in terms of a shape parameter
                                            α = k and an inverse scale parameter β = 1/θ, called a rate parameter.
                                        </p><br></br>
                                        <p>A random variable X that is gamma-distributed with shape α and rate β is denoted</p>
                                        <p> X ~ Gamma (α, β)</p>
                                        <p> The corresponding probability density function in the shape-rate parameterization is</p>
                                    </div>
                                    <div className='btformula mt-3 mb-3 ' style={{ textAlign: 'center' }}>
                                        <img src={Gamma1} />
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
export default Gamma_Theory;