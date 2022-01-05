import React from 'react'
import Weibull1 from '../assets/Images/Weibull1.png';
export const Weibull_Theory = () => {
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
                                        <h4>Weibull Distribution Definition</h4>
                                        <p style={{ fontWeight: 'bold' }}>The Weibull Distribution is a continuous probability distribution used to
                                            analyse life data, model failure times and access product reliability. It can
                                            also fit a huge range of data from many other fields like economics,
                                            hydrology, biology, engineering sciences. It is an extreme value of
                                            probability distribution which is frequently used to model the reliability,
                                            survival, wind speeds and other data.

                                        </p>
                                        <br></br>
                                        <p>The only reason to use Weibull distribution is because of its flexibility.
                                            Because it can simulate various distributions like normal and exponential
                                            distributions. Weibull’s distribution reliability is measured with the help of
                                            parameters
                                            .</p><br></br>
                                        <h4 style={{ color: '#EA4335' }}> Weibull Distribution Formulas :</h4>
                                        <img src={Weibull1} className="graph-img" style={{ marginLeft: '30%' }} /><br></br>

                                        <div className="formula" style={{ fontSize: '18px' }}>
                                            <ul>
                                                <ol>Where:</ol><br></br>
                                                <ol> k > 0 is the shape parameter and</ol>
                                                <ol> λ > 0 is the scale parameter of the distribution.</ol>

                                            </ul>
                                        </div>
                                        <h4 style={{ color: '#EA4335' }}> Weibull Distribution Properties :</h4>
                                        <div className="formula" style={{ fontSize: '18px' }}>
                                            <ul>
                                                <ol>Some properties of Weibull distribution are:</ol><br></br>
                                                <ol> • Probability density function</ol>
                                                <ol> • Cumulative distribution function</ol>
                                                <ol> • Moments</ol>
                                                <ol> • Moment generating function</ol>
                                                <ol> • Shannon entropy</ol>
                                            </ul>
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
export default Weibull_Theory;