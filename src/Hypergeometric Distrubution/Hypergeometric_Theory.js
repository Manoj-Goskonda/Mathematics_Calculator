import React from 'react'
import Hypergeometric1 from '../assets/Images/Hypergeometric1.png';
import Hypergeometric3 from '../assets/Images/Hypergeometric3.png';
import Hypergeometric4 from '../assets/Images/Hypergeometric4.png';
export const Hypergeometric_Theory = () => {
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

                                        <p style={{ fontWeight: 'bold' }}>A hypergeometric random variable is the number of successes that result
                                            from a hypergeometric experiment. The probability distribution of a
                                            hypergeometric random variable is called a hypergeometric distribution</p>
                                        <br></br>
                                        <p className="sol-text">Hypergeometric Distribution Formula :</p>
                                        <br></br>
                                        <div className='btformula mt-3 mb-3 ' style={{ textAlign: 'center' }}>
                                            <img src={Hypergeometric3} />
                                        </div>
                                        <div className="formula" style={{ fontSize: '18px' }}>
                                            <ul>
                                                <ol>Where:</ol><br></br>
                                                <ol>  • N = No. of items in the population</ol>
                                                <ol> • n = No. of items in the sample</ol>
                                                <ol> • p is the probability of one success;</ol>
                                                <ol> • K = No. of successes in the population </ol>
                                                <ol> • k = No. of successes in the sample</ol>
                                            </ul>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <p>The hypergeometric distribution is discrete. It is similar to the binomial
                                            distribution. Both describe the number of times a particular event occurs in
                                            a fixed number of trials. However, binomial distribution trials are
                                            independent, while hypergeometric distribution trials change the success
                                            rate for each subsequent trial and are called “trials without replacement”.
                                            The hypergeometric distribution can be used for sampling problems such as
                                            the chance of picking a defective part from a box (without returning parts to
                                            the box for the next trial).
                                        </p><br></br>
                                        <p>A random variable X that is gamma-distributed with shape α and rate β is denoted</p>
                                        <p> X ~ Gamma (α, β)</p>
                                        <p> The corresponding probability density function in the shape-rate parameterization is</p>
                                        <p className="sol-text">Conditions: </p>
                                        <p className="sol-text">The hypergeometric distribution is used under these conditions: </p>
                                        <ul>
                                            <ol></ol><br></br>
                                            <ol> • Total number of items (population) is fixed.</ol>
                                            <ol> • Sample size (number of trials) is a portion of the population.</ol>
                                            <ol> • Probability of success changes after each trial.</ol>

                                        </ul>
                                        <p className="sol-text">Hypergeometric Experiments : </p>
                                        <p style={{ fontWeight: 'bold' }}>A hypergeometric experiment is a statistical experiment that has the
                                            following properties:</p>
                                    </div>
                                    <ul>
                                            <ol></ol><br></br>
                                            <ol> 1. A sample of size n is randomly selected without replacement from a population of N items.</ol>
                                            <ol> 2. The mean of the distribution is equal to n * k / N .</ol>
                                            <ol> 3. The variance is n * k * ( N - k ) * ( N - n ) / [ N2 * ( N - 1 ) ] .</ol>

                                        </ul>
                                    <div className='btformula mt-3 mb-3 ' style={{ textAlign: 'center' }}>
                                        <img src={Hypergeometric4} />
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
export default Hypergeometric_Theory;