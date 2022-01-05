import { width } from '@material-ui/system';
import React from 'react'
import pdcformula from '../assets/Images/PDCformula2.png';

export const Piosson_Theory = () => {
    return (
        <>
            <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <h4 className='pt-3'>What is a Poisson Distribution?</h4>
                                        <p>In statistics, a Poisson distribution is a probability distribution that can be
                                            used to show how many times an event is likely to occur within a specified
                                            period of time. In other words, it is a count distribution. Poisson
                                            distributions are often used to understand independent events that occur
                                            at a constant rate within a given interval of time. It was named after French
                                            mathematician Siméon Denis Poisson.</p>
                                        <div className='pl-5 pb-3'>
                                            <br></br>
                                            <ul>
                                                <li><p>• A Poisson distribution can be used to measure how many times an event is likely to occur within "X" period of time, named after mathematician Siméon Denis Poisson.</p></li>
                                                <br></br>
                                                <li><p> • Poisson distributions, therefore, are used when the factor of interest is a discrete count variable.</p></li>
                                                <br></br>
                                                <li><p>•	Many economic and financial data appear as count variables, such as
                                                    how many times a person becomes unemployed in a given year, thus
                                                    lending itself to analysis with a Poisson distribution.</p></li>
                                            </ul>
                                        </div>
                                        <h5 className="theory_question">The Formula for the Poisson Distribution is :</h5>
                                        <div className='img-cen'><img src={pdcformula} style={{ height: '100px' }} /></div>
                                        <div className="pl-5 pb-3">

                                            <p>Where:</p>
                                            <p> • e is Euler's number (e = 2.71828...)</p>
                                            <p> • x is the number of occurrences</p>
                                            <p> • x! is the factorial of x</p>
                                            <p> • λ is equal to the expected value of x when that is also equal to its variance</p>

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
export default Piosson_Theory;
