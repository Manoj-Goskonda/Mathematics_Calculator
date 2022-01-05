import React from 'react'
import Normal8 from '../assets/Images/Normal8.png';
export const Normal_Theory = () => {
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
                                        <h4>What is Normal Distribution?</h4>
                                        <p>Normal distribution, also known as the Gaussian distribution, is a probability distribution 
                                            that is symmetric about the mean, showing that data near the mean are more frequent 
                                            in occurrence than data far from the mean. In graph form, normal distribution will 
                                            appear as a bell curve.</p>
                                        <br></br>
                                        
                                        <div className="formula" style={{fontSize:'18px'}}>
                                          <ul>
                                            <ol>• A normal distribution is the proper term for a probability bell curve.</ol>
                                            <ol> • In a standard normal distribution the mean is zero and the standard deviation is 1. It has zero skew and a kurtosis of 3.</ol>
                                            <ol> • Normal distributions are symmetrical, but not all symmetrical distributions are normal.</ol>
                                            <ol>• In reality, most pricing distributions are not perfectly normal.</ol>
                                        </ul>
                                        </div>

                                        <br></br>
                                        <br></br>

                                        <h4 style={{color:'#EA4335'}}>Normal distribution formula :</h4>
                                        <img src={Normal8} className="theory-graph-img" />
                                        <h4 style={{color:'#EA4335'}}>Properties of a normal distribution</h4>
                                        <div className="formula" style={{fontSize:'18px'}}>
                                          <ul>
                                            <ol> • The mean, mode and median are all equal.</ol>
                                            <ol> • The curve is symmetric at the center (i.e. around the mean, μ).</ol>
                                            <ol> • Exactly half of the values are to the left of center and exactly half the values are to the right.</ol>
                                            <ol> • The total area under the curve is 1. </ol>
                                        </ul>
                                        </div>
                                        <h4 style={{color:'#EA4335'}}>The normal distribution has the following characteristics :</h4>
                                        <div className="formula" style={{fontSize:'18px'}}>
                                          <ul>
                                            <ol> • It is a continuous distribution</ol>
                                            <ol> It is symmetrical about the mean. Each half of the distribution is a mirror image of the other half.</ol>
                                            <ol> • It is asymptotic to the horizontal axis. That is, it does not touch the x-axis and it goes on forever in each direction.</ol>
                                            <ol> • It is unimodal. The normal curve is sometimes called a bell-shaped curve. All the values are “bunched up” in only one portion of the graph – the center of the curve. </ol>
                                            <ol> • It is a family of curves. Every unique value of the mean and every unique value of the standard deviation result in a different normal curve. </ol>
                                            <ol> • The area under the curve is 1. The area under the curve yields the probabilities, so the total of all probabilities for a normal distribution is 1. Since the distribution is symmetric, the area of the distribution on each side of the mean is 0.5.</ol>
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
export default Normal_Theory;
